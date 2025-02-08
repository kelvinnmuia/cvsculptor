import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

/**
 * A header component that renders a login button when the user is not signed in and
 * a dashboard button and the user button when the user is signed in.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
      <img src='logo.svg' width={45} height={45} />

      {isSignedIn ?
        <div className='flex gap-2 items-center'>
          <Link to={'/dashboard'}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div> :
        <Link to={'/auth/sign-in'}>
          <Button>Get Started</Button>
        </Link>
      }
    </div>
  )
}

export default Header
