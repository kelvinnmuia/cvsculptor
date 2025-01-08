import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CvInfoContext } from '@/context/CvInfoContext';
import dummy from '@/datar/dummy';
import FormSection from '../../components/FormSection';
import CvPreview from '../../components/CvPreview';

function EditCv() {
    const params=useParams();
    const [cvInfo,setCvInfo]=useState(dummy);
    useEffect(()=>{
        setCvInfo(dummy);
    },[])
  return (
    <CvInfoContext.Provider value={{cvInfo,setCvInfo}}>
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
      {/* Form Section */}
      <FormSection/>
      {/* Preview Section */}
      <CvPreview/>
    </div>
    </CvInfoContext.Provider>  
  )
}

export default EditCv
