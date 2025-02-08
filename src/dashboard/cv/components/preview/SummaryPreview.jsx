import React from 'react'

/**
 * SummaryPreview
 *
 * This component renders the summary of the CV.
 *
 * @param {object} cvInfo - The CV information.
 * @returns {JSX.Element} The rendered component.
 */
function SummaryPreview({cvInfo}) {
  return (
    <p className='text-xs'>
        {cvInfo?.summary}
    </p>
  )
}

export default SummaryPreview
