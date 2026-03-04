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
import Wishlist from './Pages/Wishlist/Wishlist'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import AgentDetail from './Pages/AgentDetail/AgentDetail'
import AddProperty from './Pages/AddProperty/AddProperty'
import BlogDetail from './Layouts/BlogDetail/BlogDetailSection'
import BlogDetailPage from './Pages/BlogDetail/BlogDetailPage'
import AgentDashboard from './Agent/Pages/Dashboard/Dashboard'


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
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/agent-detail" element={<AgentDetail/>}/>
          <Route path='/addyourproperty' element={<AddProperty/>}/>
          <Route path='/blogdetail' element={<BlogDetailPage/>}/>
          <Route path='/agent/dashboard' element={<AgentDashboard/>}/>
        </Routes>
      </Router>

        
      
    </>
  )
}

export default App
