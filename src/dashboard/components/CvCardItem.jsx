import { Notebook } from 'lucide-react'
import React from 'react'

function CvCardItem(cv) {
  return (
    <div>
        <div className='p-14 bg-secondary flex
    items-center justify-center h-[280px]
    border border-primary rounded-lg'>
        <Notebook />
        </div>
        <h2 className='text-center my-1'>{cv.title}</h2>
    </div>
  )
}

export default CvCardItem
