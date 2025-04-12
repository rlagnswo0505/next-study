'use client'

import { Card } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { User } from 'lucide-react'
import { Button } from '@/components/ui/button'

type FollowRecommendProps = {
  id: number
  profileImage: string
  nickname: string
  userId: string
  followed: boolean
}

const trends: FollowRecommendProps[] = [
  {
    id: 1,
    profileImage: 'https://avatars.githubusercontent.com/u/102115202?v=4',
    nickname: '훈제',
    userId: 'rlagnswo0505',
    followed: false
  },
  {
    id: 2,
    profileImage: 'https://avatars.githubusercontent.com/u/102115202?v=4',
    nickname: '훈제',
    userId: 'rlagnswo0505',
    followed: false
  },
  {
    id: 3,
    profileImage: 'https://avatars.githubusercontent.com/u/102115202?v=4',
    nickname: '훈제',
    userId: 'rlagnswo0505',
    followed: false
  }
]

const FollowRecommend = (item: FollowRecommendProps) => {
  const handleFollow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('follow click')
  }

  return (
    <Link
      href={`/${item.userId}`}
      className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar className="h-10 w-10 overflow-hidden rounded-full">
          <AvatarImage
            src={'https://avatars.githubusercontent.com/u/102115202?v=4'}
            alt={item.nickname}
          />
          <AvatarFallback>
            <User className="text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-foreground text-lg font-bold">{item.nickname}</p>
          <p className="text-muted-foreground">@{item.userId}</p>
        </div>
      </div>
      <Button
        onClick={handleFollow}
        className="cursor-pointer rounded-full">
        {item.followed ? '팔로잉' : '팔로우'}
      </Button>
    </Link>
  )
}

const FollowSection = () => {
  return (
    <Card className="bg-muted-foreground/10 mt-2 p-3 shadow-none">
      <h2 className="mb-2 text-2xl font-bold">팔로우 추천</h2>
      <div className="flex flex-col gap-2">
        {trends.map(item => (
          <FollowRecommend
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </Card>
  )
}

export default FollowSection
