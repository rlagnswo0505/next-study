'use client'

import { Heart, MessageCircle, Repeat2 } from 'lucide-react'
import React from 'react'

const ActionButtons = () => {
  const commmented = false
  const liked = true
  const reposted = true

  return (
    <div className="flex items-center justify-between">
      <button
        className={
          'flex items-center gap-1 hover:[&_div]:bg-[#1d9bf0]/10 hover:[&_p]:text-[#1d9bf0] hover:[&_svg]:text-[#1d9bf0] ' +
          (commmented && 'text-[#1d9bf0]')
        }>
        <div className="flex h-10 w-10 items-center justify-center rounded-full">
          <MessageCircle />
        </div>
        <p className="text-sm">123</p>
      </button>
      <button
        className={
          'flex items-center gap-1 hover:[&_div]:bg-[#0baf7b]/10 hover:[&_p]:text-[#0baf7b] hover:[&_svg]:text-[#0baf7b] ' +
          (liked && 'text-[#0baf7b]')
        }>
        <div className="flex h-10 w-10 items-center justify-center rounded-full">
          <Repeat2 />
        </div>
        <p className="text-sm">123</p>
      </button>
      <button
        className={
          'flex items-center gap-1 hover:[&_div]:bg-[#e4227e]/10 hover:[&_p]:text-[#e4227e] hover:[&_svg]:text-[#e4227e] ' +
          (reposted && 'text-[#e4227e]')
        }>
        <div className="flex h-10 w-10 items-center justify-center rounded-full">
          <Heart />
        </div>
        <p className="text-sm">123</p>
      </button>
    </div>
  )
}

export default ActionButtons
