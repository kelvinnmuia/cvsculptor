import { Notebook } from 'lucide-react'
import React from 'react'
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
    <div>
      <div className='p-14 bg-secondary flex
      items-center justify-center h-[280px]'>
        <Notebook />
      </div>
      <h2 className='text-center my-1'>{cv.title}</h2>
    </div>
  )
}

export default CvCardItem

