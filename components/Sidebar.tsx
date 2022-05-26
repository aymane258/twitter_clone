import React from 'react'
import SideBarRow from './SideBarRow'
import {
  BellIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  MailIcon,
  UserAddIcon,
  UserIcon,
} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
      <img className="h-10 w-10 m-3" src="https://links.papareact.com/drq" alt="" />
      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={HashtagIcon} title="Explore" />
      <SideBarRow Icon={BellIcon} title="Notifications" />
      <SideBarRow Icon={MailIcon} title="Messages" />
      <SideBarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SideBarRow Icon={CollectionIcon} title="Lists" />
      <SideBarRow Icon={UserIcon} title="Sign In" />
      <SideBarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar
