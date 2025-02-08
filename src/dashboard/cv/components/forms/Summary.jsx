import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { CvInfoContext } from '@/context/CvInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { LoaderCircle, Brain } from 'lucide-react';
import { toast } from 'sonner';
import { AIChatSession } from './../../../../../service/AIModel';

const prompt="Job Title: {jobTitle}, Depends on job title give me summary for my cv within 4 - 5 lines in JSON format with field experienceLevel and Summary with Experience level for Fresher, Mid-Level, Experienced."
    /**
     * @description Summary component 
     * This component is used to save the summary of the cv.
     * This component is used in the edit cv page.
     * This component uses the cvInfo context to get the cv data and the UpdateCvDetail function from the GlobalApi to update the cv data.
     * 
     * @param {boolean} enabledNext - This is a boolean value that is passed to the component to enable or disable the next button.
     * 
     * @returns {ReactElement}
     */
function Summary({enabledNext}) {
    const {cvInfo,setCvInfo}=useContext(CvInfoContext);
    const [summary,setSummary]=useState();
    const [loading,setLoading]=useState(false);
    const params=useParams();
    const [aiGeneratedSummaryList,setAiGeneratedSummaryList]=useState();

    useEffect(()=>{
        summary&&setCvInfo({
            ...cvInfo,
            summary:summary
        })
    },[summary])

    /**
     * Generates a summary from AI model based on job title.
     * 
     * When called, it creates a prompt string by replacing {jobTitle} in the prompt string with the job title from the cv data.
     * It then sends the prompt to the AI model and waits for the response.
     * The response is then parsed as JSON and set as the aiGeneratedSummaryList state.
     * The loading state is then set to false.
     * 
     * @returns {Promise<void>}
     */
    const GenerateSummaryFromAI=async()=>{
        setLoading(true);
        const PROMPT=prompt.replace("{jobTitle}",cvInfo?.jobTitle);
        console.log(PROMPT);
        const result=await AIChatSession.sendMessage(PROMPT);
        console.log(JSON.parse(result.response.text()));
        setAiGeneratedSummaryList(JSON.parse([result.response.text()]));
        setLoading(false);
    }

/**
 * Handles the save event for the summary section of the cv form.
 * 
 * This function prevents the default form submission, sets the loading state to true,
 * and prepares the summary data to be sent to the server. It then makes a PUT request
 * to update the cv details using the GlobalApi.UpdateCvDetail method. On a successful response,
 * it logs the response, sets the loading state to false, and displays a success toast.
 * In case of an error, it resets the loading state.
 * 
 * @param {Event} e - The event object representing the form submission event.
 */

    const onSave=(e)=>{
        e.preventDefault();
        enabledNext(true)
        setLoading(true)
        
        const data={
            data:{
                summary:summary
            }
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
    <div>
      <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Summary</h2>
        <p>Add Summary for your job title</p>

        <form className="mt-7" onSubmit={onSave}>
            <div className="flex justify-between items-end">
                <label>Add Summary</label>
                <Button variant="outline" onClick={()=>GenerateSummaryFromAI()} type="button"size="sm" className="border-primary text-primary flex gap-2"> 
                    <Brain className='h-4 w-4'/> Generate from AI</Button>
            </div>
            <Textarea className="mt-5" required
            onChange={(e)=>setSummary(e.target.value)}
            defaultValue={cvInfo?.summary}
            />
            <div className='mt-2 flex justify-end'>
            <Button type="submit"
                disabled={loading}>
                    {loading?<LoaderCircle className='animate-spin' />:'Save'}
                    </Button>
            </div>
        </form>
      </div>
      {aiGeneratedSummaryList&&<div>
        <h2 className='font-bold text-lg'>Suggestions</h2>
        {aiGeneratedSummaryList.map((item,index)=>{
            <div>
                <h2 className='font-bold my-1'>Level:{item?.experienceLevel}</h2>
                <p>{item?.summary}</p>
            </div>
        })}
      </div>}
    </div>
  )
}

export default Summary
