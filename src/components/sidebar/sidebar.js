import './sidebar.css'
import React from 'react'
import { MdFavorite, MdSpaceDashboard } from 'react-icons/md'
import { FaGripfire, FaPlay } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'
import { IoLibrary } from 'react-icons/io5'
import SidebarButton from './sidebarButton'
export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/harshit107-file-ecosystem.appspot.com/o/users%2Ffiles%2F34609651-4afb-492e-b670-29f9536f83a4%2Fman.png?alt=media&token=2eb54179-cd26-4f85-a3c3-8b0ba4252e60'
        alt='profile' className='profile-img' />
        <div>
          <SidebarButton title="Feed" to = '/feed' icon = {<MdSpaceDashboard/>} />
          <SidebarButton title="Trending" to = '/trending' icon = {<FaGripfire/>} />
          <SidebarButton title="Player" to = '/player' icon = {<FaPlay/>} />
          <SidebarButton title="Favorites" to = '/favorites' icon = {<MdFavorite/>} />
          <SidebarButton title="Library" to = '/' icon = {<IoLibrary/>} />
        </div>
          <SidebarButton title="SignOut" to = '/logout' icon = {<FaSignOutAlt/>} />
    </div>
  )
}
