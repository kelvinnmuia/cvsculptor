import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CvInfoContext } from '@/context/CvInfoContext'
import { LoaderCircle } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import GlobalApi from './../../../../../service/GlobalApi'

/**
 * Education component allows users to add, edit, and remove their educational details.
 * It maintains a list of educational entries and updates the CV information context.
 * 
 * @component
 * 
 * @example
 * return (
 *   <Education />
 * )
 * 
 * @returns {JSX.Element} The Education component.
 * 
 * @function
 * @name Education
 * 
 * @description
 * - Uses `useState` to manage the loading state and the list of educational entries.
 * - Uses `useContext` to access and update the CV information context.
 * - Uses `useEffect` to synchronize the educational list with the CV information context.
 * - Provides functions to handle changes in the educational entries, add new entries, remove entries, and save the updated information.
 * 
 * @hook
 * @name useState
 * @description Manages the loading state and the list of educational entries.
 * 
 * @hook
 * @name useContext
 * @description Accesses and updates the CV information context.
 * 
 * @hook
 * @name useEffect
 * @description Synchronizes the educational list with the CV information context.
 * 
 * @param {Object} event - The event object from the input change.
 * @param {number} index - The index of the educational entry being updated.
 * 
 * @function
 * @name handleChange
 * @description Handles changes in the educational entries.
 * 
 * @function
 * @name AddNewEducation
 * @description Adds a new educational entry to the list.
 * 
 * @function
 * @name RemoveEducation
 * @description Removes the last educational entry from the list.
 * 
 * @function
 * @name onSave
 * @description Saves the updated educational information and updates the CV details.
 */
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

    useEffect(()=>{
        cvInfo&&setEducationalList(cvInfo?.education)
    },[cvInfo])
    /**
     * Handles changes in the educational entries.
     * 
     * @param {Object} event - The event object from the input change.
     * @param {number} index - The index of the educational entry being updated.
     */
    const handleChange = (event, index) => {
        const newEntries = educationalList.slice();
        const { name, value } = event.target;
        newEntries[index][name] = value;
        setEducationalList(newEntries);
    }

    /**
     * Adds a new educational entry to the list.
     * 
     * This function is called when the user clicks the "Add" button in the educational entries section.
     * It adds a new empty entry to the list of educational entries.
     */
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

    /**
     * Removes the last educational entry from the list.
     * 
     * This function is called when the user clicks the "Remove" button in the educational entries section.
     * It removes the last entry from the list of educational entries.
     */
    const RemoveEducation = () => {
        setEducationalList(educationalList => educationalList.slice(0, -1))
    }

    /**
     * Handles the save event of the educational entries.
     * 
     * This function is called when the user clicks the "Save" button in the educational entries section.
     * It makes a PUT request to the server to update the cv with the new educational entries
     * and then updates the state with the new cv data.
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
                                    <Input name="universityName" onChange={(e) => handleChange(e, index)} 
                                    defaultValue={item?.universityName}/>
                                </div>
                                <div>
                                    <label className='text-sm'>Degree</label>
                                    <Input name="degree" onChange={(e) => handleChange(e, index)} 
                                    defaultValue={item?.degree}/>
                                </div>
                                <div>
                                    <label className='text-sm'>Major</label>
                                    <Input name="major" onChange={(e) => handleChange(e, index)} 
                                    defaultValue={item?.major}/>
                                </div>
                                <div>
                                    <label className='text-sm'>Start Date</label>
                                    <Input type="date"name="startDate" onChange={(e) => handleChange(e, index)} 
                                    defaultValue={item?.startDate}/>
                                </div>
                                <div>
                                    <label className='text-sm'>End Date</label>
                                    <Input type="date" name="endDate" onChange={(e) => handleChange(e, index)} 
                                    defaultValue={item?.endDate}/>
                                </div>
                                <div className='col-span-2'>
                                    <label className='text-sm'>Description</label>
                                    <Textarea name="description" onChange={(e) => handleChange(e, index)} 
                                    defaultValue={item?.description}/>
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
