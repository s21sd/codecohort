import React from 'react'
import RoomForm from './roomForm'

function Room() {
  return (
    <div className='container mx-auto flex flex-col gap-8 p-7'>
      <h1 className='text-4xl font-bold'>Create Room</h1>
      <RoomForm/>
    </div>
  )
}

export default Room
