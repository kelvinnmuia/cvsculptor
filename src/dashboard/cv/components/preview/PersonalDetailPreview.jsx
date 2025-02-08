import React from 'react'

/**
 * PersonalDetailPreview Component
 * 
 * This component is used to render the personal details section on the cv preview
 * 
 * @param {Object} cvInfo - The cv information object
 * @prop {string} cvInfo.firstName - The first name of the person
 * @prop {string} cvInfo.lastName - The last name of the person
 * @prop {string} cvInfo.jobTitle - The job title of the person
 * @prop {string} cvInfo.address - The address of the person
 * @prop {string} cvInfo.phone - The phone number of the person
 * @prop {string} cvInfo.email - The email address of the person
 * @prop {string} cvInfo.themeColor - The theme color of the cv
 */
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
      <hr className='border-[1.5px] my-2' 
      style={{
        borderColor:cvInfo?.themeColor
      }}
      />
    </div>
  )
}

export default PersonalDetailPreview
