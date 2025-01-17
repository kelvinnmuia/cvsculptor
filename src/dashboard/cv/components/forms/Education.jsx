import React, { useState } from 'react'

function Education() {

    const [educationalList,setEducationalList]=useState([
        {
            universityName:'',
            degree:'',
            major:'',
            startDate:'',
            endDate:'',
            description:''
        }
    ])
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Education</h2>
        <p>Add Your educational details</p>
        <div>
            {educationalList.map((item,index)=>(
                <div>
                    <div>
                        <div>
                            <label>University Name</label>
                            <Input name="universityName" onChange={()=>handleChange(e)}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Education
