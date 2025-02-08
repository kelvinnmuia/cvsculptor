import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CvInfoContext } from '@/context/CvInfoContext';
import dummy from '@/datar/dummy';
import FormSection from '../../components/FormSection';
import CvPreview from '../../components/CvPreview';
import GlobalApi from './../../../../../service/GlobalApi';

/**
 * EditCv Component
 * 
 * This component is used to edit a cv. The component fetches the cv data by cvId
 * and then provides the cv data to the context provider so that it can be used
 * in child components. The component renders a form section and a preview section
 * 
 * @returns {JSX.Element} The EditCv Component
 */
function EditCv() {
    const {cvId}=useParams();
    const [cvInfo,setCvInfo]=useState();
    useEffect(()=>{
      GetCvInfo();
    },[])

    /**
     * GetCvInfo Function
     * 
     * This function is used to get the cv data by cvId. It makes a GET request to the
     * server and then sets the cv data to the state.
     */
    const GetCvInfo=()=>{
      GlobalApi.GetCvById(cvId).then(resp=>{
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
