import React from 'react'
import Header from './components/Header/Header'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './Pages/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header/><LandingPage/><Footer/></>,
  },
]);

const App = () => {
  return (
    <div>
     
      <RouterProvider router={router} />
      
    </div>
  )
}

export default App