import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import CvPreview from '@/dashboard/cv/components/CvPreview'
import React from 'react'

function ViewCv() {
  return (
    <div>
      <Header />

      <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
        <h2 className='text-center text-2xl font-medium'>Congrats! Your Ultimate AI generated Cv is ready</h2>
        <p className='text-center text-gray-400'>You can Now download and share your CV</p>
        <div className='flex justify-between px-44 my-10'>
          <Button>Download</Button>
          <Button>Share</Button>
        </div>
        <div>
          <CvPreview />
        </div>
      </div>
    </div>
  )
}

export default ViewCv
