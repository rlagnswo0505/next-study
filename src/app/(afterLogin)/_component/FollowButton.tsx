'use client'

import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const FollowButton = () => {
  const { data } = useSession()
  const router = useRouter()

  const clickFollow = () => {
    if (!data?.user) {
      return router.replace('/login')
    }
    return null
  }

  return (
    <Button
      className="rounded-full"
      variant={'outline'}
      onClick={clickFollow}>
      팔로우
    </Button>
  )
}

export default FollowButton
