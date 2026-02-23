import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home'
import PropertListing from './Pages/PropertyListing/PropertyListing'
import Agents from './Pages/Agents/Agents';
import PropertyDetail from './Pages/PropertyDetail/PropertyDetail';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propertyListing" element={<PropertListing />} />
          <Route path="/Agents" element={<Agents />} />
          <Route path="/propertyDetail" element={<PropertyDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
