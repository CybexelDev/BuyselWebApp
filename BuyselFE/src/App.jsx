import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import PropertListing from './Pages/PropertyListing/PropertyListing'
import Header from './Layouts/PropertyListing/Header/Header'
import Blog from './Pages/Blog/Blog'
import PropertyDetail from './Pages/PropertyDetail/PropertyDetail'
import Profile from './Pages/Profile/Profile'

function App() {
  
  return (
    <>
        {/* <PropertListing/>  */}
   {/* <PropertyDetail/> */}
   <Profile/>
  
      {/* <Blog/> */}
      
    </>
  )
}

export default App
