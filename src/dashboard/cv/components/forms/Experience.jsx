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
/**
 * The Experience component is used to display the experience form for a CV.
 * 
 * It displays a form with fields for each experience entry, and allows the user to add or remove entries.
 * When the user clicks the save button, it sends an update request to the server using the GlobalApi.UpdateCvDetail method.
 */
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
/*************  ✨ Codeium Command ⭐  *************/
/**
 * Updates the experience list state with the new value from the form input.
 *
 * @param {number} index - The index of the experience entry to update.
 * @param {Object} event - The event object from the input field.
 * @param {string} event.target.name - The name of the input field.
 * @param {string} event.target.value - The new value for the input field.
 */

/******  5356a989-8075-4da2-b03e-ff79eeb0f6a3  *******/
    const handleChange = (index, event) => {
        const newEntries = experienceList.slice();
        const { name, value } = event.target;
        newEntries[index][name] = value;
        setExperienceList(newEntries);
    }

    /**
     * Adds a new experience entry to the experience list state.
     * 
     * When called, it creates a new array with the existing experience entries and adds the formField object (which is the empty state of an experience entry) to the end.
     * The new array is then set as the new state for the experienceList.
     */
    const AddNewExperience = () => {
        setExperienceList([...experienceList, formField])
    }

    /**
     * Removes the last experience entry from the experience list state.
     * 
     * When called, it creates a new array with all the experience entries except the last one,
     * and sets the new array as the new state for the experienceList.
     */
    const RemoveExperience = () => {
        setExperienceList(experienceList => experienceList.slice(0, -1))
    }

/**
 * Saves the current experience details to the server.
 * 
 * This function sets the loading state to true, prepares the data by removing
 * the 'id' field from each experience entry, and sends an update request to
 * the server using the GlobalApi.UpdateCvDetail method. On a successful response,
 * it logs the response, sets the loading state to false, and displays a success toast.
 * In case of an error, it resets the loading state and shows an error toast.
 */

    /**
     * Saves the current experience details to the server.
     * 
     * This function sets the loading state to true, prepares the data by removing
     * the 'id' field from each experience entry, and sends an update request to
     * the server using the GlobalApi.UpdateCvDetail method. On a successful response,
     * it logs the response, sets the loading state to false, and displays a success toast.
     * In case of an error, it resets the loading state and shows an error toast.
     */
    const onSave = () => {
        setLoading(true);
        const data={
            data:{
                experience:experienceList.map(({ id, ...rest}) => rest)
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

    /**
     * Handles the change event of the RichTextEditor component and updates the
     * corresponding experience entry in the experienceList state.
     * 
     * @param {Object} e - The event object from the RichTextEditor component.
     * @param {string} name - The name of the field to update.
     * @param {number} index - The index of the experience entry to update.
     */
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
