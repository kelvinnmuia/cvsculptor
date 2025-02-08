import { SignIn } from '@clerk/clerk-react'
import React from 'react'

/**
 * SignInPage component renders a centered SignIn component.
 *
 * @component
 * @example
 * return (
 *   <SignInPage />
 * )
 */
function SignInPage() {
  return (
    <div className='flex justify-center my-20 items-center'>
      <SignIn />
    </div>
  )
}

export default SignInPage
