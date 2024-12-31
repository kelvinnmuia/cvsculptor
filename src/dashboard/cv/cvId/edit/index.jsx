import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from './components/FormSection';
import CvPreview from './components/CvPreview';
import { CvInfoContext } from '@/context/CvInfoContext';

function EditCv() {
    const params=useParams();
    const [cvInfo,setCvInfo]=useState();
    useEffect(()=>{
        setCvInfo(dummy);
    },[])
  return (
    <CvInfoContext.Provider value={{}}>
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
