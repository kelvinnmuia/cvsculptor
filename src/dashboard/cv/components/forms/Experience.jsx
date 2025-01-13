import React, { useState } from 'react'

const formField={
    title:'',
    companyName:'',
    city:'',
    state:'',
    startDate:'',
    endDate:'',
    workSummary:''
}
function Experience() {
    const [experienceList,setExperienceList]=useState([
        {
            formField
        }
    ])
  return (
    <div>
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Professional Experience</h2>
        <p>Add Your Previous Job(s) Experience</p>
        </div>
    </div>
  )
}

export default Experience
