'use client'
import { Post } from '@/model/Post'
import { useRouter } from 'next/navigation'

import React from 'react'

type Props = {
  children: React.ReactNode
  post: Post
}

const PostArticle = ({ children, post }: Props) => {
  const router = useRouter()
  const onClick = () => {
    router.push(`/${post.User.userId}/status/${post.postId}`)
  }

  return (
    <article
      className="hover:bg-muted-foreground/20 flex cursor-pointer items-start gap-2 border-b border-b-slate-200 p-3 duration-200"
      onClickCapture={onClick}>
      {children}
    </article>
  )
}

export default PostArticle
