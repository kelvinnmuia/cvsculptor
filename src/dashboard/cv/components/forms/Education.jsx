import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CvInfoContext } from '@/context/CvInfoContext'
import { LoaderCircle } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import GlobalApi from './../../../../../service/GlobalApi'

function Education() {

    const [loading, setLoading] = useState(false);
    const {cvInfo,setCvInfo}=useContext(CvInfoContext);
    const params=useParams();
    const [educationalList, setEducationalList] = useState([
        {
            universityName: '',
            degree: '',
            major: '',
            startDate: '',
            endDate: '',
            description: ''
        }
    ])

    const handleChange = (event, index) => {
        const newEntries = educationalList.slice();
        const { name, value } = event.target;
        newEntries[index][name] = value;
        setEducationalList(newEntries);
    }

    const AddNewEducation = () => {
        setEducationalList([...educationalList,
        {
            universityName: '',
            degree: '',
            major: '',
            startDate: '',
            endDate: '',
            description: ''
        }
        ])

    }

    const RemoveEducation = () => {
        setEducationalList(educationalList => educationalList.slice(0, -1))
    }

    const onSave = () => {
        setLoading(true);
        const data={
            data:{
                education:educationalList
            }
        }

        GlobalApi.UpdateCvDetail(params?.cvId,data).then(resp=>{
            console.log(resp);
            setLoading(false);
            toast("Details updated successfully");
        },(error)=>{
            setLoading(false);
            toast("Server Error, Please try again later");
        })
    }

    useEffect(()=>{
        setCvInfo({
            ...cvInfo,
            education:educationalList
        })
    },[educationalList])

    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Education</h2>
                <p>Add Your educational details</p>
                <div>
                    {educationalList.map((item, index) => (
                        <div>
                            <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                                <div className='col-span-2'>
                                    <label className='text-sm'>University Name</label>
                                    <Input name="universityName" onChange={(e) => handleChange(e, index)} />
                                </div>
                                <div>
                                    <label className='text-sm'>Degree</label>
                                    <Input name="degree" onChange={(e) => handleChange(e, index)} />
                                </div>
                                <div>
                                    <label className='text-sm'>Major</label>
                                    <Input name="major" onChange={(e) => handleChange(e, index)} />
                                </div>
                                <div>
                                    <label className='text-sm'>Start Date</label>
                                    <Input type="date"name="startDate" onChange={(e) => handleChange(e, index)} />
                                </div>
                                <div>
                                    <label className='text-sm'>End Date</label>
                                    <Input type="date" name="endDate" onChange={(e) => handleChange(e, index)} />
                                </div>
                                <div className='col-span-2'>
                                    <label className='text-sm'>Description</label>
                                    <Textarea name="description" onChange={(e) => handleChange(e, index)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between">
                    <div className='flex gap-2'>
                        <Button variant="outline" onClick={AddNewEducation} className="text-primary"> + Add More Education</Button>
                        <Button variant="outline" onClick={RemoveEducation} className="text-primary"> - Remove</Button>
                    </div>
                    <Button disabled={loading} onClick={() => onSave()}>
                        {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Education
