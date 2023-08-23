"use client"
import React,{Fragment, useEffect, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AppDispatch, useAppSelector } from '@/utils/store'
import { useDispatch } from 'react-redux'
import { closeModal } from '@/utils/modalSlice'
import { Person } from '@/utils/types'
import { updatePersonDetail } from '@/utils/contactSlice'
const ModalForm = ({personData}:{personData:Person}) => {
    const {isModalOpen:isOpen} = useAppSelector(state=>state.modal)
    const dispatch = useDispatch<AppDispatch>()
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      status: '',
      id:0
    });

    useEffect(() => {
      if (personData) {
        setFormData({
          firstName: personData.firstName || '',
          lastName: personData.lastName || '',
          status: personData.status || '',
          id:personData.id || 0
        });
      }
    }, [personData]);
      const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>
      )=>{
        e.preventDefault()
        dispatch(updatePersonDetail(formData))
        dispatch(closeModal())
      }

  return (
    <div>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={()=>dispatch(closeModal())}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                 <form action="" className='p-3' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="firstName" className='text-gray-400'>First Name</label>
                        <input title='firstName' type="text" name='firstName' className='outline-none p-2 h-12 border-2 border-gray-400 focus:border-blue-500 rounded-xl'  value={formData.firstName} onChange={handleChange}/>
                    </div>
                    <div className='flex flex-col gap-2 my-5'>
                        <label htmlFor="lastName" className='text-gray-400'>Last Name</label>
                        <input title="lastName" type="text" name='lastName' className='outline-none p-2 h-12 border-2 border-gray-400 focus:border-blue-500 rounded-xl' value={formData.lastName} onChange={handleChange}/>
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
        <button className='text-sm bg-blue-500 py-2 px-5 mt-5 rounded-xl text-white outline-none'>
          Update
        </button>
                 </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default ModalForm