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
      <h2 className='text-center text-sm font-medium'>
        {cvInfo?.jobTitle}</h2>
      <h2 className='text-center font-normal text-xs'
      style={{
        color:cvInfo?.themeColor
      }}
      >{cvInfo?.address}</h2>
      <div className='flex justify-between'>
        <h2 className='font-normal text-xs'
        style={{
          color:cvInfo?.themeColor
        }}
        >{cvInfo?.phone}</h2>
        <h2 className='font-normal text-xs'
        style={{
          color:cvInfo?.themeColor
        }}
        >{cvInfo?.email}</h2>
      </div>
    </div>
  )
}

export default PersonalDetailPreview
