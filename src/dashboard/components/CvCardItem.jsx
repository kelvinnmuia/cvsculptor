import { MoreVertical } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

/**
 * A component that renders a card for a CV.
 *
 * The card displays an icon of a notebook and the title of the CV.
 *
 * @param {Object} cv - The object containing the data for the CV.
 * @param {string} cv.title - The title of the CV.
 * @returns {React.ReactElement} A React element for the CV card component.
 */

function CvCardItem({ cv }) {
  return (
    <div>
      <Link to={'/dashboard/cv/' + cv.documentId + "/edit"}>
        <div className='p-14 bg-gradient-to-b 
        from-pink-100 via-grey-200 to-blue-200 
        flex
        items-center justify-center h-[280px] 
        border-t-4 border-primary rounded-lg
        hover:scale-105 transition-all hover:shadow-md shadow-primary'>
          <img src="./cv.png" width={80} height={80} />
        </div>
      </Link>
      <div>
        <h2 className='text-center my-1'>{cv.title}</h2>
        <DropdownMenu>
          <DropdownMenuTrigger>
          <MoreVertical className='h-4 w-4 cursor-pointer px-10' />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default CvCardItem

