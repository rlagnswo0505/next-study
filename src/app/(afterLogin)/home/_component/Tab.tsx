'use client';

import React, { useContext } from 'react';
import { TabContext } from './TabProvider';

const Tab = () => {
  const { tab, setTab } = useContext(TabContext)
 
  const handleRec = () => {
    setTab('rec')
  }

  const handleFol = () => {
    setTab('fol')
  }
  return (

    <div className='fixed z-1 border-b-1 w-[598px] backdrop-blur-sm
    '>
      <h2
        className='text-2xl font-bold p-2'
      >홈</h2>
      <div className='flex justify-between'>
        <div className={'w-full h-14 relative flex flex-1 justify-center items-center text-foreground cursor-pointer'}
          onClick={handleRec}
        >
          추천
          <div
            className={`w-14 absolute h-1 bottom-0 rounded-full bg-foreground ${tab === 'rec' ? 'block' : 'hidden'}`}
          />
        </div>
        <div
          className={'w-full h-14 relative flex flex-1 justify-center items-center text-foreground cursor-pointer'}
          onClick={handleFol}
        >
          팔로우 중
          <div
            className={`w-14 absolute h-1 bottom-0 rounded-full bg-foreground ${tab === 'fol' ? 'block' : 'hidden'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Tab;