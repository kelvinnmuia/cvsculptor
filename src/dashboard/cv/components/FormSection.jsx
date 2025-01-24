import React, { act, useState } from 'react'
import PersonalDetail from './forms/PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react'
import Summary from './forms/Summary';
import Experience from './forms/Experience';
import Education from './forms/Education';
import Skills from './forms/Skills';
import { Link, Navigate, useParams } from 'react-router-dom';

function FormSection() {
  const [activeFormIndex,setActiveFormIndex]=useState(1);
  const [enableNext,setEnableNext]=useState(false);
  const {cvId}=useParams();
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
          <Link to={"/dashboard"}>
        <Button><Home /> </Button>
        </Link>
        <Button variant="outline" size="sm" 
        className="flex gap-2"> <LayoutGrid/>Theme</Button>
        </div>
        <div className='flex gap-2'>
          {activeFormIndex>1
          &&<Button size="sm"
          onClick={()=>setActiveFormIndex(activeFormIndex-1)}> <ArrowLeft/></Button>}
          <Button 
          disabled={!enableNext}
          className="flex gap-2" size="sm"
          onClick={() =>setActiveFormIndex(activeFormIndex+1)}
          > Next 
            <ArrowRight/> </Button>
        </div>
      </div>
      {/* Personal Detail */}
      {activeFormIndex==1? <PersonalDetail enabledNext={(v)=>setEnableNext(v)} />
      :activeFormIndex==2? 
            <Summary enabledNext={(v)=>setEnableNext(v)} />
            :activeFormIndex==3?
            <Experience/>
            :activeFormIndex==4?
            <Education />
            :activeFormIndex==5?
            <Skills />
            :activeFormIndex==6?
            <Navigate to={'/my-cv/'+cvId+"/view"}/>
            :null
    }
    {/* Experience */}

      {/* Educational Detail */}

      {/* Skills */}

    </div>
  )
}

export default FormSection
