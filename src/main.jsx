import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
   createBrowserRouter,
   RouterProvider,
   } from 'react-router';
   import Root from './layouts/root.jsx'; 
  const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
    ]
      
      
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
