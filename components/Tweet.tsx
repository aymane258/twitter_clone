import { ChatAlt2Icon, EyeIcon, HeartIcon, SwitchHorizontalIcon, UploadIcon } from '@heroicons/react/outline'
import React from 'react'
import { Tweet } from '../typings'
import TimeAgo from "react-timeago"

interface Props {
  tweet: Tweet
}

function Tweet({ tweet }: Props) {
    console.log(tweet)
  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
      <div className='flex space-x-3'>
      <img
          className=" h-14 w-14 rounded-full object-cover"
          src={tweet.profileImg}
          alt=""
        ></img>
        <div>
        <div className='flex items-center space-x-1'>
        <p className='font-bold mr-1'>{tweet.username}</p>
        <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username}</p>
        <TimeAgo date={tweet._createdAt} className="text-sm text-gray-500"/>
        </div>
        <p className='pt-1'>{tweet.text}</p>
        {tweet.image&& (<img className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm" src={tweet.image}>
        </img>) }
      </div>
      </div>
      <div className='flex justify-between'>
          <ChatAlt2Icon className='h-5 w-5 cursor-pointer items-center space-x-3 text-gray-500'/>
          <SwitchHorizontalIcon className='h-5 w-5 cursor-pointer items-center space-x-3 text-gray-500'/>
          <HeartIcon className='h-5 w-5 cursor-pointer items-center space-x-3 text-gray-500'/>
          <UploadIcon className='h-5 w-5 cursor-pointer items-center space-x-3 text-gray-500'/>
      </div>
    </div>
  )
}

export default Tweet
