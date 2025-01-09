import React from 'react'

function SummaryPreview({cvInfo}) {
  return (
    <p className='text-xs'>
        {cvInfo?.summary}
    </p>
  )
}

export default SummaryPreview
