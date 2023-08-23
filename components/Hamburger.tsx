"use client"
import { openSidebar } from '@/utils/sideBarSlice'
import { AppDispatch } from '@/utils/store'
import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useDispatch } from 'react-redux'
const Hamburger = () => {
    const dispatch = useDispatch<AppDispatch>()
  return (
    <nav className='p-5 ml-2'>
    <GiHamburgerMenu className="text-2xl cursor-pointer text-blue-500" onClick={()=>dispatch(openSidebar())}/>
     </nav>
  )
}

export default Hamburger