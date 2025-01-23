import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useContext, useEffect, useState } from 'react'
import RichTextEditor from '../RichTextEditor'
import { CvInfoContext } from '@/context/CvInfoContext'
import { useParams } from 'react-router-dom'
import { LoaderCircle } from 'lucide-react'
import GlobalApi from './../../../../../service/GlobalApi'
import { toast } from 'sonner'

const formField = {
    title: '',
    companyName: '',
    city: '',
    state: '',
    startDate: '',
    endDate: '',
    workSummary: ''
}
function Experience() {
    const [experienceList, setExperienceList] = useState([
        {
            formField
        }
    ]);

    const [loading,setLoading]=useState(false);
    const { cvInfo, setCvInfo } = useContext(CvInfoContext);
    const params=useParams();

    useEffect(() => {
        cvInfo&&setExperienceList(cvInfo?.experience)
    }, [cvInfo])
    const handleChange = (index, event) => {
        const newEntries = experienceList.slice();
        const { name, value } = event.target;
        newEntries[index][name] = value;
        setExperienceList(newEntries);
    }

    const AddNewExperience = () => {
        setExperienceList([...experienceList, formField])
    }

    const RemoveExperience = () => {
        setExperienceList(experienceList => experienceList.slice(0, -1))
    }

    const onSave = () => {
        setLoading(true);
        const data={
            data:{
                experience:experienceList
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

    const handleRichTextEditor = (e, name, index) => {
        const newEntries = experienceList.slice();
        newEntries[index][name] = e.target.value;
        setExperienceList(newEntries);
    }

    useEffect(() => {
        setCvInfo({
            ...cvInfo,
            experience:experienceList
        })
    }, [experienceList])

    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Professional Experience</h2>
                <p>Add Your Previous Job(s) Experience</p>
                <div>
                    {experienceList.map((item, index) => (
                        <div key={index}>
                            <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                                <div>
                                    <label className='text-sm'>Position Title</label>
                                    <Input name="title" onChange={(event) => handleChange(index, event)} 
                                    defaultValue={item?.title}/>
                                </div>
                                <div>
                                    <label className='text-sm'>Company Name</label>
                                    <Input name="companyName" onChange={(event) => handleChange(index, event)} 
                                    defaultValue={item?.companyName}/>
                                </div>
                                <div>
                                    <label className='text-sm'>City</label>
                                    <Input name="city" onChange={(event) => handleChange(index, event)} 
                                    defaultValue={item?.city}/>
                                </div>
                                <div>
                                    <label className='text-sm'>State</label>
                                    <Input name="state" onChange={(event) => handleChange(index, event)} 
                                    defaultValue={item?.state}/>
                                </div>
                                <div>
                                    <label className='text-sm'>Start Date</label>
                                    <Input type="date" name="startDate" onChange={(event) => handleChange(index, event)} 
                                    defaultValue={item?.startDate}/>
                                </div>
                                <div>
                                    <label className='text-sm'>End Date</label>
                                    <Input type="date" name="endDate" onChange={(event) => handleChange(index, event)} 
                                    defaultValue={item?.endDate}/>
                                </div>
                                <div className='col-span-2'>
                                    {/* Work Summary */}
                                    <RichTextEditor
                                        index={index}
                                        defaultValue={item?.workSummary}
                                        onRichTextEditorChange={(event) => handleRichTextEditor(event, 'workSummary', index)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between">
                    <div className='flex gap-2'>
                        <Button variant="outline" onClick={AddNewExperience} className="text-primary"> + Add More Experience</Button>
                        <Button variant="outline" onClick={RemoveExperience} className="text-primary"> - Remove</Button>
                    </div>
                    <Button disabled={loading} onClick={() => onSave()}>
                        {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Experience
