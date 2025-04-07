import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { User } from 'lucide-react'
import React from 'react'
import 'dayjs/locale/ko'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'
import ActionButtons from './ActionButtons'
import PostArticle from './PostArticle'

dayjs.locale('ko')
dayjs.extend(relativeTime)

const post = {
  postId: 1,
  User: {
    userId: 'rlagnswo0505',
    nickname: '훈제',
    profileImage: 'https://avatars.githubusercontent.com/u/102115202?v=4'
  },
  content: `안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!
안녕

하이
  `,
  createdAt: new Date(),
  Images: []
}

const Post = () => {
  return (
    <PostArticle post={post}>
      <Link
        href={`/${post.User.userId}`}
        className="relative h-10 w-10">
        <Avatar className="h-10 w-10 overflow-hidden rounded-full">
          <AvatarImage
            src={post.User.profileImage}
            alt={post.User.nickname}
            className="object-cover"
          />
          <AvatarFallback>
            <User className="text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        <div className="absolute top-0 left-0 h-10 w-10 rounded-full opacity-20 hover:bg-black" />
      </Link>
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <Link
            href={`/${post.User.userId}`}
            className="flex items-center gap-1">
            <p className="font-bold hover:underline">{post.User.nickname}</p>
            <div>@{post.User.userId}</div>
          </Link>
          &nbsp; • &nbsp;
          <div className="text-muted-foreground hover:underline">
            {dayjs(post.createdAt).fromNow(true)}
          </div>
        </div>
        <div
          // wrapping text pre
          className="text-sm break-words whitespace-pre-wrap">
          {post.content}
        </div>
        <ActionButtons />
      </div>
    </PostArticle>
  )
}

export default Post
