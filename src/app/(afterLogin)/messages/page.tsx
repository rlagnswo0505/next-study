import React from 'react'
import Room from './_component/Room'

const Messages = () => {
  return (
    <main>
      <div className="w-[598px] p-3">
        <h3 className="text-lg font-bold">쪽지</h3>
      </div>
      <div>
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    </main>
  )
}

export default Messages
