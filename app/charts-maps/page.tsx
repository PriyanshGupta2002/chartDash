import CovidMap from '@/components/CovidMap'
import LineGraphComponent from '@/components/LineGraph'
import React from 'react'

const page = () => {
  return (
    <div className='p-3'>
      <div className='max-w-7xl m-auto my-5'>
        <h1 className='text-5xl text-gray-500 font-bold'>Corona Map</h1>
        <CovidMap/>
      </div>
      <div className='max-w-7xl m-auto '>
        <LineGraphComponent/>
      </div>
    </div>
  )
}

export default page