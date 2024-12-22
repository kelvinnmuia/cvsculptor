import React from 'react'
import AddCv from './components/AddCv'
function Dashboard() {
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Curriculum Vitae</h2>
      <p>Create an amazing CV for your next job opportunity</p>
    <div className="grid grid-cols-2 
    md:grid-cols-3 lg:grid-cols-5
    mt-10
    ">
      <AddCv />
    </div>
    </div>
  )
}

export default Dashboard
