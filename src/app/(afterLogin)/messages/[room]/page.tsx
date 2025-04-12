import React from 'react'
import BackButton from '../../_component/BackButton'
import { faker } from '@faker-js/faker'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SendHorizontal, UserRound } from 'lucide-react'
import Link from 'next/link'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

//dayjs
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('ko')
dayjs.extend(relativeTime)

const ChatRoom = () => {
  const user = {
    userId: 'hero',
    nickname: '영웅',
    link: faker.image.avatar(),
    Messages: [
      {
        roomId: 1,
        userId: 'rlagnswo',
        content: `안녕하세요.
        ㅎㅇ
        ㅎㅇ`,
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
  return (
    <main>
      <div className="flex w-[598px] items-center gap-3 p-3">
        <BackButton />
        <h3 className="text-lg font-bold">{user.nickname}</h3>
      </div>
      <Link
        href={`/${user.userId}`}
        className="hover:bg-muted-foreground/20 mb-4 flex cursor-pointer flex-col items-center justify-center border-b p-4 duration-200">
        <Avatar className="mb-2 h-16 w-16 rounded-full">
          <AvatarImage
            src={user.link}
            alt="profile image"
          />
          <AvatarFallback className="bg-slate-500">
            <UserRound />
          </AvatarFallback>
        </Avatar>
        <b>{user.nickname}</b>
        <p>@{user.userId}</p>
      </Link>
      <ScrollArea className="h-[300px] w-full">
        <div className="p-4">
          {user.Messages.map((message, index) => {
            if (message.userId === user.userId) {
              return (
                <div
                  key={index}
                  className="mb-2 flex flex-col items-end gap-2">
                  <div
                    className={
                      'bg-primary w-fit rounded-2xl rounded-br-none px-3 py-2 text-sm whitespace-pre-wrap text-white'
                    }>
                    {message.content}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {dayjs(message.createdAt).format(
                      'YYYY년 MM월 DD일 A HH시 mm분'
                    )}
                  </div>
                </div>
              )
            }

            return (
              <div
                key={index}
                className="mb-2 flex flex-col items-start gap-2">
                <div
                  className={
                    'bg-muted-foreground/20 w-fit rounded-2xl rounded-bl-none px-3 py-2 text-sm whitespace-pre-wrap'
                  }>
                  {message.content}
                </div>
                <div className="text-muted-foreground text-xs">
                  {dayjs(message.createdAt).format(
                    'YYYY년 MM월 DD일 A HH시 mm분'
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </ScrollArea>
      <form className="border-t p-3">
        <div className="bg-muted-foreground/10 flex w-full items-center gap-2 rounded-2xl px-3 py-2">
          <Textarea
            placeholder="새 쪽지 작성하기"
            className="min-h-4 resize-none overflow-hidden rounded-2xl border-none bg-transparent focus:ring-0 focus:outline-none"
          />
          <Button
            type="submit"
            variant={'ghost'}
            className="hover:bg-muted-foreground/20 h-10 w-10 rounded-full p-0">
            <SendHorizontal />
          </Button>
        </div>
      </form>
    </main>
  )
}

export default ChatRoom
