"use client"
import { closeSidebar } from '@/utils/sideBarSlice'
import { AppDispatch, useAppSelector } from '@/utils/store'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import {BsPeople,BsPinMap} from 'react-icons/bs'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'

const Sidebar = () => {
    const isOpen = useAppSelector(state=>state.sidebar.isOpen)
    const dispatch = useDispatch<AppDispatch>()
    console.log(isOpen)

  return (
    <div className={`${isOpen?"translate-x-0":"-translate-x-full"} transition-translate duration-200 ease-linear fixed inset-0 bg-black/25 z-50`} onClick={()=>dispatch(closeSidebar())}>
        <div className='bg-white w-[300px] min-h-screen lg:w-[500px]'>
                    <div className='p-5 flex gap-3 flex-col'>
          
                            <Link href="/" className='font-medium text-md border-2 flex items-center justify-between border-gray-400 p-3 rounded-md mt-7'>
                            Contacts
                            <BsPeople fontSize={26}/>
                            </Link>
                       
                             
                            <Link href="/addNewContact" className='font-medium text-md border-2 flex items-center justify-between border-gray-400 p-3 rounded-md mt-7'>
                                Add Contact
                                <AiOutlineUsergroupAdd fontSize={26}/>
                            </Link>
                            <Link href="/charts-maps" className='font-medium text-md border-2 flex items-center justify-between border-gray-400 p-3 rounded-md mt-7'>
                                Charts & Maps
                                <BsPinMap fontSize={26}/>
                            </Link>
                    </div>
        </div>
    </div>
  )
}

export default Sidebar