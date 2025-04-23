'use client'

import { Suspense, use } from 'react'
import { handlers } from '@/mocks/handlers'

const mockingEnabledPromise =
  typeof window !== 'undefined' // browser일 때
    ? import('@/mocks/browser').then(async ({ default: worker }) => {
        if (process.env.NODE_ENV === 'production') {
          return
        }
        await worker?.start({
          // msw가 처리할 수 없는 요청이 들어왔을 때
          onUnhandledRequest(request: Request, print) {
            if (request.url.includes('_next')) {
              // next가 내부적으로 처리하는 url이기 때문에 msw가 처리할 필요 없음 그래서 return
              return
            }
            print.warning()
          }
        })
        worker?.use(...handlers)
        ;(module as any).hot?.dispose(() => {
          worker?.stop()
        })
        console.log(worker?.listHandlers())
      })
    : Promise.resolve()

export function MSWProvider({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  // If MSW is enabled, we need to wait for the worker to start,
  // so we wrap the children in a Suspense boundary until it's ready.
  return (
    <Suspense fallback={null}>
      <MSWProviderWrapper>{children}</MSWProviderWrapper>
    </Suspense>
  )
}

function MSWProviderWrapper({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  // use 사용해서 promise 실행 기다리고 children return
  use(mockingEnabledPromise)
  return children
}
