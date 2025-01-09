import React from 'react'

function ExperiencePreview({cvInfo}) {
  return (
    <div className='my-6'>
      <h2 className={`text-center font-bold text-sm mb-2 {}`}
      style={{
        color:cvInfo?.themeColor
      }}
      >Professional Experience</h2>
      <hr style={{
        borderColor:cvInfo?.themeColor
      }} />
    </div>
  )
}

export default ExperiencePreview

