import React from 'react'
import TabProvider from './_component/TabProvider'
import Tab from './_component/Tab'
import PostForm from '../_component/PostForm'
import { Separator } from '@/components/ui/separator'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'
import { getPostRecommends } from './_lib/getPostRecommends'
import PostRecommends from './_component/PostRecommends'

const Home = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends
  })
  const dehydratedState = dehydrate(queryClient)

  return (
    <div className="flex w-[600px] flex-col items-stretch">
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <div className="mt-[104px]" />
          <PostForm />
          <Separator />
          <div className="flex flex-col">
            <PostRecommends />
          </div>
        </TabProvider>
      </HydrationBoundary>
    </div>
  )
}

export default Home
