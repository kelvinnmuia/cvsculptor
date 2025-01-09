import React from 'react'

function PersonalDetailPreview({cvInfo}) {
  return (
    <div>
      <h2 className='font-bold text-xl text-center'
      style={{
        color:cvInfo?.themeColor
      }}
      >
        {cvInfo?.firstName} {cvInfo?.lastName}</h2>
      <h2 className='text-center text-sm font-medium'
      style={{
        color:cvInfo?.themeColor
      }}
      >{cvInfo?.jobTitle}</h2>
    </div>
  )
}

export default PersonalDetailPreview
