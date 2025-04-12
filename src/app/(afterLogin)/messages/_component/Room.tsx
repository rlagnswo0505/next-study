'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import { UserRound } from 'lucide-react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import { useRouter } from 'next/navigation'

dayjs.locale('ko')
dayjs.extend(relativeTime)

const Room = () => {
  const router = useRouter()

  const user = {
    userId: 'hero',
    nickname: '영웅',
    Messages: [
      {
        roomId: 1,
        userId: 'rlagnswo',
        content: '안녕하세요.',
        createdAt: new Date()
      },
      {
        roomId: 1,
        userId: 'hero',
        content: '안녕히가세요.',
        createdAt: new Date()
      }
    ]
  }

  const onClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`)
  }

  return (
    <div
      className="hover:bg-muted-foreground/20 flex cursor-pointer items-center gap-3 p-3 duration-200"
      onClickCapture={onClick}>
      <Avatar className="h-10 w-10 rounded-full">
        <AvatarImage alt="profile image" />
        <AvatarFallback>
          <UserRound className="h-20 w-20" />
        </AvatarFallback>
      </Avatar>
      <div>
        <div className="text-muted-foreground flex">
          <b className="text-primary">{user.nickname}</b>
          <span>@{user.userId}</span>
          &nbsp; • &nbsp;
          <span>{dayjs(user.Messages.at(-1)?.createdAt).fromNow(true)}</span>
        </div>
        <div>{user.Messages.at(-1)?.content}</div>
      </div>
    </div>
  )
}

export default Room
