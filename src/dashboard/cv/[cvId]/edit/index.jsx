import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CvInfoContext } from '@/context/CvInfoContext';
import dummy from '@/datar/dummy';
import FormSection from '../../components/FormSection';
import CvPreview from '../../components/CvPreview';
import GlobalApi from './../../../../../service/GlobalApi';

function EditCv() {
    const {cvId}=useParams();
    const [cvInfo,setCvInfo]=useState(dummy);
    useEffect(()=>{
      setCvInfo
      GetCvInfo();
    },[])

    const GetCvInfo=()=>{
      GlobalApi.GetCvById().then(resp=>{
        console.log(resp.data.data)
        setCvInfo(resp.data.data)
      })
    }

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
