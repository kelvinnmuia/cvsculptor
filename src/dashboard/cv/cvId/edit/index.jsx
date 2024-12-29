import React from 'react'
import { useParams } from 'react-router-dom'

function EditCv() {
    const params=useParams();

    useEffect(()=>{
        console.log(params.cvId);
    },[])
  return (
    <div>
      EditCv
    </div>
  )
}

export default EditCv
