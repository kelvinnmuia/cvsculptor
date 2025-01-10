import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
/**
 * A component that renders a card for a CV.
 *
 * The card displays an icon of a notebook and the title of the CV.
 *
 * @param {Object} cv - The object containing the data for the CV.
 * @param {string} cv.title - The title of the CV.
 * @returns {React.ReactElement} A React element for the CV card component.
 */

function CvCardItem({cv}) {
  return (
    <Link to={'/dashboard/cv/'+cv.documentId+"/edit"}>
      <div className='p-14 bg-secondary flex
      items-center justify-center h-[280px] 
      border border-primary rounded-lg
      hover:scale-105 transition-all hover:shadow-md shadow-primary'>
        <Notebook />
      </div>
      <h2 className='text-center my-1'>{cv.title}</h2>
    </Link>
  )
}

export default CvCardItem

