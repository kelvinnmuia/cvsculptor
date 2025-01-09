import React from 'react'

function PersonalDetailPreview({cvInfo}) {
  return (
    <div>
      <h2 className='font-bold text-xl text-center'>
        {cvInfo?.firstName} {cvInfo?.lastName}</h2>
    </div>
  )
}

export default PersonalDetailPreview
