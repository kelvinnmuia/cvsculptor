import React from 'react'
import { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import { CvInfoContext } from '@/context/CvInfoContext'
import SummaryPreview from './preview/SummaryPreview';


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

      {/* Education */}

      {/* Skills */}

    </div>
  )
}

export default CvPreview
