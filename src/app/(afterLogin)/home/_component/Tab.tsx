'use client'

import React, { useContext } from 'react'
import { TabContext } from './TabProvider'

const Tab = () => {
  const { tab, setTab } = useContext(TabContext)

  const handleRec = () => {
    setTab('rec')
  }

  const handleFol = () => {
    setTab('fol')
  }
  return (
    <div className="fixed z-1 w-[598px] border-b-1 backdrop-blur-sm">
      <h2 className="p-2 text-2xl font-bold">홈</h2>
      <div className="flex justify-between">
        <div
          className={
            'text-foreground hover:bg-muted-foreground/10 relative flex h-14 w-full flex-1 cursor-pointer items-center justify-center'
          }
          onClick={handleRec}>
          추천
          <div
            className={`bg-foreground absolute bottom-0 h-1 w-14 rounded-full ${tab === 'rec' ? 'block' : 'hidden'}`}
          />
        </div>
        <div
          className={
            'text-foreground hover:bg-muted-foreground/10 relative flex h-14 w-full flex-1 cursor-pointer items-center justify-center'
          }
          onClick={handleFol}>
          팔로우 중
          <div
            className={`bg-foreground absolute bottom-0 h-1 w-14 rounded-full ${tab === 'fol' ? 'block' : 'hidden'}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Tab
