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
import About from './Pages/About/About'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propertyListing" element={<PropertListing />} />
          <Route path="/Agents" element={<Agents />} />
          <Route path="/propertyDetail" element={<PropertyDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
