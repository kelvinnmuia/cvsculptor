import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router } from 'react-router-dom'
import SignInPage from './auth/sign-in/index.jsx'
import { RouterProvider } from 'react-router-dom'
import Home from './home/index.jsx'
import Dashboard from './dashboard/index.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import EditCv from './dashboard/cv/[cvId]/edit'
import { View } from 'lucide-react'
import ViewCv from './my-cv/[cvId]/view'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
/**
 * Defines the routes for the application using `createBrowserRouter`.
 * 
 * Routes:
 * - `/` - Renders the `Home` component.
 * - `/auth/sign-in` - Renders the `SignInPage` component.
 * - `/my-cv/:cvId/view` - Renders the `ViewCv` component.
 * - `/dashboard` - Renders the `Dashboard` component as a child of `App`.
 * - `/dashboard/cv/:cvId/edit` - Renders the `EditCv` component as a child of `App`.
 * 
 * @constant
 * @type {Array<Object>}
 */
const router=createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/dashboard/cv/:cvId/edit',
        element:<EditCv/>
      }
    ]
  },
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/auth/sign-in',
    element:<SignInPage/>
  },
  {
    path:'/my-cv/:cvId/view',
    element:<ViewCv/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
