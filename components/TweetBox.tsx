import {
  BanIcon,
  CalendarIcon,
  ChatIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import React, { useState } from 'react'

const TweetBox = () => {

    const [input, setInput] = useState<string>('')

  return (
    <div className='flex space-x-2 p-5'>
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src="https://links.papareact.com/gll"
        alt=""
      ></img>
      <div className=' flex flex-1 items-center pl-2' >
        <form className='flex flex-1 flex-col'>
          <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="what's happening" className='h-24 text-xl outline-none placeholder:text-xl'></input>
          <div className='flex items-center justify-between '>
            <div className='flex space-x-2 text-twitter'>
              <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
            </div>
            <button disabled={!input} className='bg-twitter text-white px-5 py-2 font-bold rounded-full disabled:opacity-40'>Tweet</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
