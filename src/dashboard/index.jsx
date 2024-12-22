import React from 'react'
import CreateCv from './components/CreateCv'
function Dashboard() {
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Create an amazing CV for your next job opportunity</p>
    <div>
      <CreateCv />
    </div>
    </div>
  )
}

export default Dashboard
