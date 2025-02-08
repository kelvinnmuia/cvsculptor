import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CvInfoContext } from '@/context/CvInfoContext'
import { LoaderCircle } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { toast } from 'sonner';

    /**
     * PersonalDetail Component
     * 
     * This component is used to edit the personal detail of a cv. The component renders a form
     * with input fields for first name, last name, job title, address, phone and email. The component
     * also renders a button to save the form data.
     * 
     * @param {boolean} enabledNext - a boolean to enable or disable the next button
     * 
     * @returns {JSX.Element} The PersonalDetail Component
     */
function PersonalDetail({enabledNext}) {
    const params=useParams();
    const {cvInfo,setCvInfo}=useContext(CvInfoContext)

    const [formData,setFormData]=useState();
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        console.log(params)
    },[])

    /**
     * Handles changes in the form input fields.
     * 
     * This function is called every time a user types something in the input fields.
     * The function disables the next button, gets the name and value of the input field,
     * updates the formData state and the cvInfo state.
     * 
     * @param {Object} e - The event object from the input change.
     */
    const handleInputChange=(e)=>{
        enabledNext(false)
        const {name,value}=e.target;

        setFormData({
            ...formData,
            [name]:value
        })

        setCvInfo({
            ...cvInfo,
            [name]:value
        })
    }

    /**
     * Saves the personal details form data to the server.
     * 
     * This function is called when the user clicks the "Save" button in the personal details section.
     * It sets the loading state to true, prepares the data to be sent to the server, makes a PUT request
     * to the server to update the cv with the new data, and then updates the state with the new cv data.
     * On a successful response, it logs the response, sets the loading state to false, and displays a success toast.
     * In case of an error, it resets the loading state and shows an error toast.
     */
    const onSave=(e)=>{
        e.preventDefault();
        enabledNext(true)
        setLoading(true)
        
        const data={
            data:formData
        }

        GlobalApi.UpdateCvDetail(params?.cvId,data).then(resp=>{
            console.log(resp);
            enabledNext(true);
            setLoading(false);
            toast("Details updated successfully");
        },(error)=>{
            setLoading(false);
        })
    }
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Personal Detail</h2>
        <p>Get Started with the basic information</p>

        <form onSubmit={onSave}>
            <div className='grid grid-cols-2 mt-5 gap-3'>
                <div>
                    <label className='text-sm'>First Name</label>
                    <Input name="firstName" defaultValue={cvInfo?.firstName} required onChange={handleInputChange}/>
                </div>
                <div>
                    <label className='text-sm'>Last Name</label>
                    <Input name="lastName" required onChange={handleInputChange}
                    defaultValue={cvInfo?.lastName} />
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Job Title</label>
                    <Input name="jobTitle" required onChange={handleInputChange}
                    defaultValue={cvInfo?.jobTitle} />
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Address</label>
                    <Input name="address" required onChange={handleInputChange}
                    defaultValue={cvInfo?.address} />
                </div>
                <div>
                    <label className='text-sm'>Phone</label>
                    <Input name="phone" required onChange={handleInputChange}
                    defaultValue={cvInfo?.phone}/>
                </div>
                <div>
                    <label className='text-sm'>Email</label>
                    <Input name="email" required onChange={handleInputChange}
                    defaultValue={cvInfo?.email}/>
                </div>
            </div>
            <div className='mt-3 flex justify-end'>
                <Button type="submit"
                disabled={loading}>
                    {loading?<LoaderCircle className='animate-spin' />:'Save'}
                    </Button>
            </div>
        </form>
    </div>
  )
}

export default PersonalDetail
