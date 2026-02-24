import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import PropertListing from './Pages/PropertyListing/PropertyListing'
import AgentListing from './Pages/Agents/Agents'
import Header from './Layouts/PropertyListing/Header/Header'
import Blog from './Pages/Blog/Blog'
import PropertyDetail from './Pages/PropertyDetail/PropertyDetail'
import Profile from './Pages/Profile/Profile'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Agents from './Pages/Agents/Agents';


function App() {

  return (
    <>
 {/* App page */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propertyListing" element={<PropertListing />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/propertyDetail" element={<PropertyDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>

        
      
    </>
  )
}

export default App
