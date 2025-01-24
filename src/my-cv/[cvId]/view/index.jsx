import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import React from 'react'

function ViewCv() {
  return (
    <div>
      <Header />

      <div className='my-10'>
        <h2 className='text-center text-2xl font-medium'>Congrats! Your Ultimate AI generated Cv is ready</h2>
        <p>You can Now download and share your CV</p>
        <div>
          <Button>Download</Button>
          <Button>Share</Button>
        </div>
      </div>
    </div>
  )
}

export default ViewCv
