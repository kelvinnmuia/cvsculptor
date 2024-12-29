import React, { useEffect, useState } from 'react'
import AddCv from './components/AddCv'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../service/GlobalApi';
import CvCardItem from './components/CvCardItem';

  /**
   * Dashboard component that renders the user's CVs and allows them to create a new one.
   *
   * Fetches the list of CVs for the current user on mount and displays them in a grid.
   * The AddCv component is also rendered, allowing the user to create a new CV.
   *
   * @returns {React.ReactElement} The rendered Dashboard component.
   */
function Dashboard() {
  
  const {user}=useUser();
  const [cvList,setCvList]=useState([]);
  useEffect(()=>{
    user&&GetCvsList();
  },[user])

  /**
   * Fetches the list of CVs for the current user and updates the state.
   */
  const GetCvsList = () => {
    GlobalApi.GetUserCvs(user?.primaryEmailAddress?.emailAddress)
      .then(resp => {
        // Update the cvList state with the fetched data
        setCvList(resp.data.data);
      })
  }
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My CV</h2>
      <p>Create an amazing CV for your next job opportunity</p>
    <div className="grid grid-cols-2 
    md:grid-cols-3 lg:grid-cols-5 gap-5
    mt-10
    ">
      <AddCv />
      {cvList.length>0&&cvList.map((cv,index)=>(
        <CvCardItem cv={cv} key={index} />
      ))}
    </div>
    </div>
  )
}

export default Dashboard
