'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState('hot')

  const router = useRouter()
  const searchParams = useSearchParams()

  const onClickHot = () => {
    setCurrentTab('hot')
    router.replace(`/search?q=${searchParams.get('q')}`)
  }
  const onClickNew = () => {
    setCurrentTab('new')
    router.replace(`/search?${searchParams.toString()}&f=new`)
  }

  return (
    <div className="fixed z-1 h-fit w-[598px] border-b-1 backdrop-blur-sm">
      <div className="flex justify-between">
        <div
          className={
            'text-foreground hover:bg-muted-foreground/10 relative flex h-14 w-full flex-1 cursor-pointer items-center justify-center'
          }
          onClick={onClickHot}>
          인기
          <div
            className={`bg-foreground absolute bottom-0 h-1 w-14 rounded-full ${currentTab === 'hot' ? 'block' : 'hidden'}`}
          />
        </div>
        <div
          className={
            'text-foreground hover:bg-muted-foreground/10 relative flex h-14 w-full flex-1 cursor-pointer items-center justify-center'
          }
          onClick={onClickNew}>
          최신
          <div
            className={`bg-foreground absolute bottom-0 h-1 w-14 rounded-full ${currentTab === 'new' ? 'block' : 'hidden'}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Tabs
