import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from './components/FormSection';
import CvPreview from './components/CvPreview';

function EditCv() {
    const params=useParams();

    useEffect(()=>{
        console.log(params.cvId);
    },[])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
      {/* Form Section */}
      <FormSection/>
      {/* Preview Section */}
      <CvPreview/>
    </div>
  )
}

export default EditCv
