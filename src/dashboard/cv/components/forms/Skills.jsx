import { Input } from '@/components/ui/input'
import React, { useContext, useEffect, useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CvInfoContext } from '@/context/CvInfoContext'
import GlobalApi from './../../../../../service/GlobalApi'
import { toast } from 'sonner'
import { useParams } from 'react-router-dom'

    /**
     * This component is used to edit the skills section of a cv. It
     * provides a form with fields to add, edit, and remove skills. The
     * component fetches the skills data from the server and provides them
     * to the context provider so that it can be used in other components.
     *
     * @returns {JSX.Element} The Skills component
     */
function Skills() {
    const [skillsList, setSkillsList] = useState([{
        name: '',
        rating: 0
    }])

    const {cvId}=useParams();
    const [loading,setLoading]=useState(false);
    const {cvInfo,setCvInfo}=useContext(CvInfoContext);

    useEffect(()=>{
        cvInfo&&setSkillsList(cvInfo?.skills)
    },[])
    /**
     * Handles changes in the skills entries.
     * 
     * @param {number} index - The index of the skill entry being updated.
     * @param {string} name - The name of the field to update.
     * @param {string} value - The new value of the field.
     */
    const handleChange = (index,name,value) => {
        const newEntries = skillsList.slice();
        newEntries[index][name] = value;
        setSkillsList(newEntries);
    }

    /**
     * Adds a new skill entry to the skills list state.
     * 
     * When called, it creates a new array with the existing skills entries and adds the formField object (which is the empty state of a skills entry) to the end.
     * The new array is then set as the new state for the skillsList.
     */
    const AddNewSkills=()=>{
        setSkillsList([...skillsList,{
            name:'',
            rating:0
        }])
    }

    /**
     * Removes the last skill entry from the skills list state.
     * 
     * When called, it creates a new array with all the skill entries except the last one,
     * and sets the new array as the new state for the skillsList.
     */
    const RemoveSkills=()=>{
        setSkillsList(skillsList=>skillsList.slice(0,-1))
    }

    /**
     * Handles the save event of the skills entries.
     * 
     * This function is called when the user clicks the "Save" button in the skills entries section.
     * It makes a PUT request to the server to update the cv with the new skills entries
     * and then updates the state with the new cv data.
     */
    const onSave=()=>{
        setLoading(true)
        const data={
            data:{
                skills:skillsList
            }
        }

        GlobalApi.UpdateCvDetail(cvId,data)
        .then(resp=>{
            console.log(resp);
            setLoading(false);
            toast('Details updated successfully')
        },(error)=>{
            setLoading(false);
            toast('Server Error, Try again!')
        })
    }

    useEffect(()=>{
        setCvInfo({
            ...cvInfo,
            skills:skillsList
        })
    },[skillsList])

    return (
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Skills</h2>
            <p>Add Your top professional key skills</p>

            <div>
                {skillsList.map((item, index) => (
                    <div className='flex justify-between mb-2 border rounded-lg p-3'>
                        <div>
                            <label className='text-sm'>Name</label>
                            <Input className="w-full" 
                            defaultValue={item.name}
                            onChange={(e) => handleChange(index, 'name', e.target.value)} />
                        </div>
                        <Rating style={{ maxWidth: 120 }} value={item.rating} onChange={(v) => handleChange(index, 'rating', v)} />
                    </div>
                ))}
            </div>
            <div className="flex justify-between">
                <div className='flex gap-2'>
                    <Button variant="outline" onClick={AddNewSkills} className="text-primary"> + Add More Skill</Button>
                    <Button variant="outline" onClick={RemoveSkills} className="text-primary"> - Remove</Button>
                </div>
                <Button disabled={loading} onClick={() => onSave()}>
                    {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                </Button>
            </div>
        </div>
    )
}

export default Skills
