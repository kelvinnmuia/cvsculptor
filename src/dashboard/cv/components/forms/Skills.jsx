import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

function Skills() {
    const [skillsList,setSkillsList]=useState([{
            name:'',
            rating:0
        }])

    const handleChange=(index,name,value)=>{
        
    }

    return (
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Skills</h2>
            <p>Add Your top professional key skills</p>

            <div>
                {skillsList.map((item,index)=>(
                    <div>
                        <div>
                            <label className='text-sm'>Name</label>
                            <Input onChange={(e)=>handleChange(e,'name',e.target.value)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
