import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
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

    const handleChange=(event,index)=>{

    }
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
                            <Input name="universityName" onChange={(e)=>handleChange(e,index)}/>
                        </div>
                        <div>
                            <label>Degree</label>
                            <Input name="degree" onChange={(e)=>handleChange(e,index)}/>
                        </div>
                        <div>
                            <label>Major</label>
                            <Input name="major" onChange={(e)=>handleChange(e,index)}/>
                        </div>
                        <div>
                            <label>Start Date</label>
                            <Input name="startDate" onChange={(e)=>handleChange(e,index)}/>
                        </div>
                        <div>
                            <label>End Date</label>
                            <Input name="endDate" onChange={(e)=>handleChange(e,index)}/>
                        </div>
                        <div>
                            <label>Description</label>
                            <Textarea name="description" onChange={(e)=>handleChange(e,index)}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Education
