"use client"
import ContactSection from '@/components/ContactSection'
import ModalForm from '@/components/ModalForm'
import { useAppSelector } from '@/utils/store'
import React from 'react'
const page = () => {
  const person = useAppSelector(state=>state.person.persons)
  return (
  <div className='p-3'>

    <ContactSection contacts={person}/> 
  </div>
  )
}

export default page