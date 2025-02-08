import React from 'react'
import { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import { CvInfoContext } from '@/context/CvInfoContext'
import SummaryPreview from './preview/SummaryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationalPreview from './preview/EducationalPreview';
import SkillsPreview from './preview/SkillsPreview';


/**
 * CvPreview Component
 * 
 * This component renders a comprehensive preview of the CV, displaying various
 * sections such as personal details, summary, professional experience, education,
 * and skills. Each section is rendered using respective preview components that
 * receive the `cvInfo` object for displaying relevant data. The component uses
 * the theme color from `cvInfo` to style the border.
 */

function CvPreview() {
  const {cvInfo,setCvInfo}=useContext(CvInfoContext);
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
      borderColor:cvInfo?.themeColor
    }}>
      {/* Personal Details */}
      <PersonalDetailPreview cvInfo={cvInfo}/>
      {/* Summary */}
      <SummaryPreview cvInfo={cvInfo} />

      {/* Professional Experience */}
      <ExperiencePreview cvInfo={cvInfo} />

      {/* Education */}
      <EducationalPreview cvInfo={cvInfo} />

      {/* Skills */}
      <SkillsPreview cvInfo={cvInfo} />

    </div>
  )
}

export default CvPreview
