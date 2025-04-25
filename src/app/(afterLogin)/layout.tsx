import React from 'react'
import NavMenu from './_component/NavMenu'

import LogoutButton from './_component/LogoutButton'
import TrendSection from './_component/TrendSection'
import FollowSection from './_component/FollowSection'
import RightSearchZone from './_component/RightSearchZone'
import { auth } from '@/auth'
import Image from 'next/image'
import zLogo from '@/../public/zlogo.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import RQProvider from './_component/RQProvider'

type Props = {
  children: React.ReactNode
  modal: React.ReactNode
}

export default async function AfterLoginLayout({ children, modal }: Props) {
  const session = await auth()

  console.log('session', session)

  return (
    <RQProvider>
      <div className="flex items-stretch">
        <header className="flex grow-1 flex-col items-end">
          <section className="h-dvh w-[72px] xl:w-[275px]">
            <div className="fixed flex h-dvh w-[inherit] flex-col justify-between px-2">
              <ul className="flex flex-1 flex-col gap-2">
                <li>
                  <Button
                    variant={'ghost'}
                    size={'icon'}
                    className="h-14 w-14 rounded-full"
                    asChild>
                    <Link href={session?.user ? '/home' : '/'}>
                      <Image
                        src={zLogo}
                        alt="zLogo"
                        width={40}
                        height={40}
                      />
                    </Link>
                  </Button>
                </li>
                {session?.user && <NavMenu />}
              </ul>
              <LogoutButton me={session} />
            </div>
          </section>
        </header>
        <div className="flex grow-1 flex-col items-start">
          <div className="flex w-[600px] justify-between lg:w-[990px]">
            <main className="w-[600px] border-x-1">
              <section className="h-dvh w-full">{children}</section>
            </main>
            <section className="hidden w-[350px] flex-col lg:flex">
              <RightSearchZone />
              <TrendSection />
              <FollowSection />
            </section>
          </div>
        </div>
        {modal}
      </div>
    </RQProvider>
  )
}
