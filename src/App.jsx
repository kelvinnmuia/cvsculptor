import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header'
import { Toaster } from './components/ui/sonner'

/**
 * The main application component.
 *
 * This component renders the <Header /> and then an <Outlet /> for the current route.
 * It also renders a <Toaster /> for displaying toast notifications.
 *
 * If the user is not signed in when the component is loaded, it redirects to the sign-in page.
 */
function App() {
  const [count, setCount] = useState(0)
  const {user, isLoaded, isSignedIn}=useUser();

  if(!isSignedIn&&isLoaded)
  {
    return <Navigate to={'/auth/sign-in'} />
  }

  return (
    <>
    <Header />
    <Outlet />
    <Toaster/>
    </>
  )
}

export default App
