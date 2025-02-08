import React from 'react'

/**
 * EducationalPreview Component
 * 
 * This component is used to display a list of educational entries 
 * 
 * @param {Object} cvInfo - the cv data
 * @returns {JSX.Element} The EducationalPreview Component
 */
function EducationalPreview({cvInfo}) {
  return (
    <div className='my-6'>
      <h2 className={`text-center font-bold text-sm mb-2 {}`}
      style={{
        color:cvInfo?.themeColor
      }}
      >Education</h2>
      <hr style={{
        borderColor:cvInfo?.themeColor
      }} />

      {cvInfo?.education.map((education,index)=>(
        <div key={index} className='my-5'>
            <h2 className='text-sm font-bold'
            style={{
                color:cvInfo?.themeColor
            }}
            >{education.universityName}</h2>
            <h2 className='text-xs flex justify-between'>{education?.degree} in {education?.major}
                <span>{education?.startDate} - {education?.endDate}</span>
            </h2>
            <p className='text-xs my-2'>
                {education?.description}
            </p>
        </div>
      ))}
    </div>
  )
}

export default EducationalPreview
