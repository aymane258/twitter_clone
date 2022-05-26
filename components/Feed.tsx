﻿import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'

function Feed() {
  return (
    <div className='flex flex-col col-span-7 lg:col-span-5 border-x'>
      <div className='flex items-center justify-between'>
          <h1 className='p-5 pb-0'>Home</h1>
          <RefreshIcon className='mt-5 mr-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>
      </div>
    </div>
  )
}

export default Feed