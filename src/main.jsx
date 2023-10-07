import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import AuthProvider from './Provider/AuthProvider';
import Home from './Pages/Home/Home';
import Root from './Root/Root';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('/services.json') 
      },
      {
        path:'/gallery',
        element:<Gallery></Gallery>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
