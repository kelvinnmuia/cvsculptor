import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { CvInfoContext } from '@/context/CvInfoContext'
import CvPreview from '@/dashboard/cv/components/CvPreview'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../service/GlobalApi'
import { RWebShare } from 'react-web-share'

/**
 * A component that renders a CV.
 *
 * This component fetches the CV data by cvId when mounted and then renders the
 * CV preview component.
 *
 * The component also renders a header and a section with a button to download
 * the CV and a button to share the CV.
 *
 * @returns {JSX.Element} The rendered ViewCv component.
 */
function ViewCv() {

  const [cvInfo, setCvInfo] = useState();
  const { cvId } = useParams();

  useEffect(() => {
    GetCvInfo();
  })
  /**
   * Fetches the CV data by cvId and updates the cvInfo state.
   *
   * The function makes a GET request to the server and then sets the cvInfo
   * state with the fetched data.
   */
  const GetCvInfo = () => {
    {
      GlobalApi.GetCvById(cvId).then(resp => {
        console.log(resp.data.data);
        setCvInfo(resp.data.data);
      })
    }
  }

  const HandleDownload = () => {
    window.print();
  }

  return (
    <CvInfoContext.Provider value={{ cvInfo, setCvInfo }}>
      <div id="no-print">
        <Header />
        <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
          <h2 className='text-center text-2xl font-medium'>Congrats! Your Ultimate AI generated Cv is ready</h2>
          <p className='text-center text-gray-400'>You can Now download and share your CV</p>
          <div className='flex justify-between px-44 my-10'>
            <Button onClick={HandleDownload}>Download</Button>

            <RWebShare
              data={{
                text: "Hello Everyone!, This is my cv please check it out",
                url: "import.meta.env.VITE_APP_URL" + "/my-cv/" + cvId + "/view",
                title: cvInfo?.firstName+" "+cvInfo?.lastName+" CV",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button>Share</Button>
            </RWebShare>
          </div>
        </div>
      </div>
      <div id="print-area" className='my-10 mx-10 md:mx-20 lg:mx-36'>
        <CvPreview />
      </div>
    </CvInfoContext.Provider>
  )
}

export default ViewCv
