import React from 'react'
import { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import { CvInfoContext } from '@/context/CvInfoContext'


function CvPreview() {
  const {cvInfo,setCvInfo}=useContext(CvInfoContext);
  return (
    <div>
      {/* Personal Details */}
      <PersonalDetailPreview cvInfo={cvInfo}/>
      {/* Summary */}

      {/* Professional Experience */}

      {/* Education */}

      {/* Skills */}

    </div>
  )
}

export default CvPreview
