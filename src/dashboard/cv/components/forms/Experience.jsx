import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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

    const handleChange=(index,event)=>{

    }

  return (
    <div>
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Professional Experience</h2>
        <p>Add Your Previous Job(s) Experience</p>
        <div>
            {experienceList.map((item,index)=>(
                <div>
                    <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                        <div>
                            <label className='text-xs'>Position Title</label>
                            <Input name="title" onChange={(event)=>handleChange(event,index)} />
                        </div>
                        <div>
                            <label className='text-xs'>Company Name</label>
                            <Input name="companyName" onChange={(event)=>handleChange(event,index)} />
                        </div>
                        <div>
                            <label className='text-xs'>City</label>
                            <Input name="city" onChane={(event)=>handleChange(event,index)} />
                        </div>
                        <div>
                            <label className='text-xs'>State</label>
                            <Input name="state" onChange={(event)=>handleChange(event,index)} />
                        </div>
                        <div>
                            <label className='text-xs'>Start Date</label>
                            <Input type="date" name="startDate" onChange={(event)=>handleChange(event,index)} />
                        </div>
                        <div>
                            <label className='text-xs'>End Date</label>
                            <Input type="date" name="endDate" onChange={(event)=>handleChange(event,index)} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div>
            <Button variant="outline"> + Add More Experience</Button>
        </div>
        </div>
    </div>
  )
}

export default Experience
