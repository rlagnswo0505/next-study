import PhotoModal from '@/app/(afterLogin)/@modal/[username]/status/[id]/photo/[photoid]/page'
import Home from '@/app/(afterLogin)/home/page'
import React from 'react'

type Props = {
  params: {
    username: string
    id: string
    photoid: string
  }
}

const PhotoPage = async ({ params }: Props) => {
  const { username, id, photoid } = await params
  console.log('PhotoPage', username, id, photoid)

  return (
    <>
      <Home />
      <PhotoModal />
    </>
  )
}

export default PhotoPage
