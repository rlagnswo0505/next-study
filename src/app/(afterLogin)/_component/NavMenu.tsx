'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { House, Mail, PencilLine, Search, UserRound } from 'lucide-react'

const NavMenu = () => {
  const segment = useSelectedLayoutSegment()

  return (
    <>
      <li>
        <Button
          variant={'ghost'}
          size={'lg'}
          className={
            "rounded-full p-7 text-2xl [&_span]:hidden xl:[&_span]:block [&_svg:not([class*='size-'])]:size-6"
          }
          asChild>
          <Link href="/home">
            <House strokeWidth={segment === 'home' ? '3' : '2'} />
            <span className={segment === 'home' ? 'font-bold' : 'font-normal'}>
              홈
            </span>
          </Link>
        </Button>
      </li>
      <li>
        <Button
          variant={'ghost'}
          size={'lg'}
          className="rounded-full p-7 text-2xl [&_span]:hidden xl:[&_span]:block [&_svg:not([class*='size-'])]:size-6"
          asChild>
          <Link href="/explore">
            <Search
              strokeWidth={segment === 'explore' ? '3' : '2'}
              size={100}
            />
            <span
              className={segment === 'explore' ? 'font-bold' : 'font-normal'}>
              탐색하기
            </span>
          </Link>
        </Button>
      </li>
      <li>
        <Button
          variant={'ghost'}
          size={'lg'}
          className="rounded-full p-7 text-2xl [&_span]:hidden xl:[&_span]:block [&_svg:not([class*='size-'])]:size-6"
          asChild>
          <Link href="/messages">
            <Mail strokeWidth={segment === 'messages' ? '3' : '2'} />
            <span
              className={segment === 'messages' ? 'font-bold' : 'font-normal'}>
              쪽지
            </span>
          </Link>
        </Button>
      </li>
      <li>
        <Button
          variant={'ghost'}
          size={'lg'}
          className="rounded-full p-7 text-2xl [&_span]:hidden xl:[&_span]:block [&_svg:not([class*='size-'])]:size-6"
          asChild>
          <Link href="/rlagnswo0505">
            <UserRound strokeWidth={segment === 'rlagnswo0505' ? '3' : '2'} />
            <span
              className={
                segment === 'rlagnswo0505' ? 'font-bold' : 'font-normal'
              }>
              프로필
            </span>
          </Link>
        </Button>
      </li>
      <li>
        <Button
          size={'lg'}
          className="w-full rounded-full p-7 text-xl [&_span]:hidden xl:[&_span]:block [&_svg:not([class*='size-'])]:size-6"
          asChild>
          <Link href="/compose/tweet">
            <PencilLine
              size={20}
              className="block xl:hidden"
            />
            <span className="font-bold">게시하기</span>
          </Link>
        </Button>
      </li>
    </>
  )
}

export default NavMenu
