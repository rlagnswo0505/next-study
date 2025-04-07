import BackButton from '@/app/(afterLogin)/_component/BackButton'
import Post from '@/app/(afterLogin)/_component/Post'
import React from 'react'
import CommentForm from './_component/CommentForm'

const page = () => {
  return (
    <main>
      <div className="fixed z-1 flex w-[598px] items-center gap-4 p-3 backdrop-blur-sm">
        <BackButton />
        <h3 className="text-lg font-bold">게시하기</h3>
      </div>
      <div className="pt-16">
        <Post />
      </div>
      <CommentForm />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  )
}

export default page
