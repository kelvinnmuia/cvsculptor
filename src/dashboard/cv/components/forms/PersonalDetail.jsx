import { CvInfoContext } from '@/context/CvInfoContext'
import React, { useContext } from 'react'

function PersonalDetail() {
    const [cvInfo, setCvInfo]=useContext(CvInfoContext)
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Personal Detail</h2>
        <p>Get Started with the basic information</p>
    </div>
  )
}

export default PersonalDetail
