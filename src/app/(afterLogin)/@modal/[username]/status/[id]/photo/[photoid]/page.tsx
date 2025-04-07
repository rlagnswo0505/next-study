'use client'

import CommentForm from '@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm'
import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons'
import Post from '@/app/(afterLogin)/_component/Post'
import { faker } from '@faker-js/faker'
import React from 'react'

import { DialogContent, DialogTitle } from '@/components/ui/dialog'

import PhotaModalBody from './_component/PhotaModalBody'

const PhotoModal = () => {
  const post = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    content: faker.lorem.text()
  }

  return (
    <PhotaModalBody>
      <DialogContent
        // close button left top 으로 이동
        className="[&>button]:bg-primary-foreground flex h-full gap-0 rounded-none border-none bg-black p-0 sm:w-full sm:max-w-dvw [&>button]:top-4 [&>button]:right-auto [&>button]:left-4 [&>button]:h-12 [&>button]:w-12">
        <DialogTitle />
        <section className="flex flex-1 flex-col items-center justify-center">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            <img
              src={post.link}
              alt={post.content}
              className="absolute h-full w-full object-cover"
            />
            <div
              className={`bg-[${post.imageId}] flex-1 bg-contain bg-center bg-no-repeat`}
            />
          </div>
          <div className="flex content-center items-center">
            <div className="h-[60px] w-[600px]">
              <ActionButtons white />
            </div>
          </div>
        </section>
        <section className="h-full w-[350px] overflow-auto border-l bg-white">
          <Post noImage />
          <CommentForm />
          <div>
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </section>
      </DialogContent>
    </PhotaModalBody>
  )
}

export default PhotoModal
