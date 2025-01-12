import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { CvInfoContext } from '@/context/CvInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { LoaderCircle, Brain } from 'lucide-react';
import { toast } from 'sonner';
import { AIChatSession } from './../../../../../service/AIModel';

const prompt="Job Title: {jobTitle}, Depends on job title give me summary for my cv within 4 - 5 lines in JSON format with field experience Level and Summary with Experience level for Fresher, Mid-Level, Experienced."
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

    const GenerateSummaryFromAI=async()=>{
        setLoading(true);
        const PROMPT=prompt.replace("{jobTitle}",cvInfo?.jobTitle);
        console.log(PROMPT);
        const result=await AIChatSession.sendMessage(PROMPT);
        console.log(JSON.parse(result.response.text()));
        setAiGeneratedSummaryList(JSON.parse(result.response.text()));
        setLoading(false);
    }

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
                <h2>Level:{item?.experienceLevel}</h2>
                <p>{item?.summary}</p>
            </div>
        })}
      </div>}
    </div>
  )
}

export default Summary
