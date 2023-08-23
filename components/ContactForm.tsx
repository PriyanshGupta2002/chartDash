"use client"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPerson } from '@/utils/contactSlice'
import { useRouter } from 'next/navigation'
import { AppDispatch } from '@/utils/store'
const ContactForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    status:"active"
  })
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>
    )=>{
      e.preventDefault()
      dispatch(addPerson(formData))
      router.push("/")

    }
  return (
    <form className='max-w-[1024px] m-auto my-4 shadow-xl bg-slate-300/50 p-4 rounded-xl w-full'
    onSubmit={handleSubmit}
    >
      <h2 className='text-7xl text-blue-400 mb-5 font-bold'>Add Contact</h2>
        <div className='flex flex-col gap-2'>
            <label htmlFor="firstName" className='text-base font-medium text-gray-600'>First Name</label>
            <input type="text" name="firstName"  title='firstName' placeholder='John' className='border-none bg-white rounded-md outline-none h-14 p-2' onChange={handleChange} value={formData.firstName}/>
        </div>
        <div className='flex flex-col gap-2 my-5'>
            <label htmlFor="lastName" className='text-base font-medium text-gray-600'>Last Name</label>
            <input type="text" name="lastName"  title='lastName' placeholder='Doe' className='border-none bg-white rounded-md outline-none h-14 p-2' onChange={handleChange} value={formData.lastName}/>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="gender" className='text-base font-medium text-gray-600'>
            Status
          </label>
          <div className='flex items-center gap-2'>
            <input 
            type="radio" 
            title='radio'
            name='status' 
            value="active" 
            checked={formData.status==="active"}
            onChange={handleChange} 
             />{' '}
             Active
            <input 
            type="radio" 
            title='radio'
            name='status' 
            value="inactive" 
            checked={formData.status==="inactive"}
            onChange={handleChange} 
             />{' '}
             Inactive
          </div>
        </div>
        <button className="font-medium bg-blue-500 px-6 mt-4 rounded-xl py-2  text-white">
            Add
        </button>
    </form>
  )
}

export default ContactForm