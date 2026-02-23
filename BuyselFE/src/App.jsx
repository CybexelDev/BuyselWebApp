import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import PropertListing from './Pages/PropertyListing/PropertyListing'
import AgentListing from './Pages/Agents/Agents'
import Header from './Layouts/PropertyListing/Header/Header'
import Blog from './Pages/Blog/Blog'
import PropertyDetail from './Pages/PropertyDetail/PropertyDetail'
import Profile from './Pages/Profile/Profile'

function App() {
  
  return (
    <>
      <Home />
      {/* <PropertListing />
      <AgentListing />
      <Profile /> */}
        {/* <PropertListing/>  */}
   {/* <PropertyDetail/> */}
   <Profile/>
  
      {/* <Blog/> */}
      
    </>
  )
}

export default App
