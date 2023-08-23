import { deletePerson } from '@/utils/contactSlice'
import { openModal } from '@/utils/modalSlice'
import { AppDispatch } from '@/utils/store'
import { Person } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ModalForm from './ModalForm'
interface Contacts {
    contacts:Person[]
}

const ContactSection = ({contacts}:Contacts) => {
    const dispatch = useDispatch<AppDispatch>()
    const handleDelete=(id:number)=>{
        dispatch(deletePerson({id}))
    }
    const [personData, setPersonData] = useState<any>(null)
  return (
    <div className='max-w-7xl m-auto p-3'>
            <ModalForm
            personData={personData}
            />
        <h1 className='text-5xl text-gray-400 font-bold mb-9'>Your Contacts</h1>
        <div className='grid p-2'>  
            {(contacts  && contacts.length>0) ? contacts.map((contact)=>(
                <div className='flex flex-col gap-4 bg-gray-300/60 p-3  rounded-xl' key={contact.id}>

                <div className='flex items-center justify-between'>
                    <div className='flex flex-col gap-2'>
                        <h3 className=' font-bold'>First Name - <span className='font-medium text-gray-500'>{contact.firstName}</span> </h3>
                        <h3 className=' font-bold'>Last Name - <span className='font-medium text-gray-500'>{contact.lastName}</span> </h3>
                        <span className={`${contact.status==="active"?"bg-green-400/60":"bg-gray-400"} w-fit py-1 rounded-md px-5 capitalize font-medium text-white `}>{contact.status}</span>
                    </div>
                    <div className='w-28 h-28 relative'>
                        <Image
                        fill
                        src={"/assets/profile.svg"}
                        alt='profile'
                        className='object-cover rounded-full bg-blue-500'
                        />
                    </div>
                  
                        </div>
                        <div className='flex items-center gap-6'>
                        <button className='bg-transparent outline-none text-sm text-red-400 ring-1 ring-red-200 py-2 px-5 rounded-md' onClick={()=>handleDelete(contact.id)}>Delete</button>
                        <button className='bg-transparent outline-none text-sm text-blue-500 ring-1 ring-blue-200 py-2 px-5 rounded-md' onClick={()=>{
                            setPersonData(contact)
                            dispatch(openModal())
                        }}>Edit</button>
                    </div>
                </div>
            )):"No Contacts Yet"}
        </div>
    </div>
  )
}

export default ContactSection