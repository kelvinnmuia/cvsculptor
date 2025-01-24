import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { CvInfoContext } from '@/context/CvInfoContext'
import CvPreview from '@/dashboard/cv/components/CvPreview'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../service/GlobalApi'

function ViewCv() {

  const [cvInfo,setCvInfo]=useState();
  const {cvId}=useParams();
  
  useEffect(()=>{
    GetCvInfo();
  })
  const GetCvInfo=()=>{{
    GlobalApi.GetCvById(cvId).then(resp=>{
      console.log(resp.data.data);
      setCvInfo(resp.data.data);
    })
  }}

  const HandleDownload=()=>{
    window.print();
  }

  return (
    <CvInfoContext.Provider value={{cvInfo,setCvInfo}}>
      <div id="no-print">
      <Header />
      <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
        <h2 className='text-center text-2xl font-medium'>Congrats! Your Ultimate AI generated Cv is ready</h2>
        <p className='text-center text-gray-400'>You can Now download and share your CV</p>
        <div className='flex justify-between px-44 my-10'>
          <Button onClick={HandleDownload}>Download</Button>
          <Button>Share</Button>
        </div>
      </div>
      </div>
      <div id="print-area">
          <CvPreview />
        </div>
    </CvInfoContext.Provider>
  )
}

export default ViewCv
