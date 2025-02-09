import React, { act, useState } from 'react'
import PersonalDetail from './forms/PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react'
import Summary from './forms/Summary';
import Experience from './forms/Experience';
import Education from './forms/Education';
import Skills from './forms/Skills';
import { Link, Navigate, useParams } from 'react-router-dom';

/**
 * A component that renders a form section for the CV form.
 *
 * This component renders a section of the CV form which includes a navigation
 * bar at the top and a form component depending on the activeFormIndex state.
 *
 * The navigation bar includes a button to go to the dashboard, a theme button,
 * a back button, and a next button. The back and next buttons are used to
 * navigate between the different sections of the form.
 *
 * The form component that is rendered depends on the activeFormIndex state.
 * The different form components are:
 *  - PersonalDetail: This is the first section of the form which includes inputs
 *    for the user's name, email, phone number, address, and a profile picture.
 *  - Summary: This is the second section of the form which includes a text area
 *    for the user to enter a summary of their experience and skills.
 *  - Experience: This is the third section of the form which includes a list of
 *    experience entries. Each experience entry includes inputs for the job title,
 *    company name, city, state, start date, end date, and a description of the
 *    job.
 *  - Education: This is the fourth section of the form which includes a list of
 *    educational entries. Each educational entry includes inputs for the degree,
 *    field of study, university name, city, state, start date, end date, and a
 *    description of the education.
 *  - Skills: This is the fifth section of the form which includes a list of skills.
 *    Each skill includes an input for the name of the skill and a rating of the
 *    user's proficiency in the skill.
 *
 * The last section of the form is a navigation bar that includes a button to go
 * to the previous section and a button to go to the next section.
 */
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

    </div>
  )
}

export default FormSection
