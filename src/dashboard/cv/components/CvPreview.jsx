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
 * This component is used to render a preview of a CV based on the cvInfo object
 * 
 * The component renders a card with a border at the top with the theme color of the CV.
 * 
 * The component renders the personal details, summary, professional experience, education and skills of the CV.
 * 
 * @param {Object} cvInfo - The object containing the data of the CV.
 * @returns {JSX.Element} The rendered component.
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
