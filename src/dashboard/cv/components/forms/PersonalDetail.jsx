import { Input } from '@/components/ui/input'
import { CvInfoContext } from '@/context/CvInfoContext'
import React, { useContext } from 'react'

function PersonalDetail() {
    const {cvInfo,setCvInfo}=useContext(CvInfoContext)
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Personal Detail</h2>
        <p>Get Started with the basic information</p>

        <form>
            <div className='grid grid-cols-2 mt-5 gap-3'>
                <div>
                    <label className='text-sm'>First Name</label>
                    <Input name="firstName"/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default PersonalDetail
