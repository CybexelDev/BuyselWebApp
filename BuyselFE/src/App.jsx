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
import AgentPlans from './Agent/Pages/Plans/Plans'
import LoginAndSignuppage from './Pages/LoginAndSignup/LoginAndSignup'
import AgentProfile from './Agent/Pages/Profile/Profile'
import Enquiry from './Agent/Pages/Enquiry/Enquiry'
import EnquiryDetail from './Agent/Pages/EnquiryDetail/EnquiryDetail'
import AgentPropertyListing from './Agent/Pages/propertyListing/propertyListing'
import { useSelector } from "react-redux";
import OwnerDashboard from './Pages/OwnerDashboard/OwnreDashboard'
import PlansPage from './Pages/Plans/PlansPage'
import UserEnquiry from './Agent/Pages/UserEnquiry/UserEnquiry'
import EnquiryDetailLayoutUser from './Layouts/OwnerDashboard/Tabs/Enquiries/EnquiriesDetail'
import DashboardPropertyDetail from './Layouts/OwnerDashboard/Tabs/Properties/DashboardPropertyDetail'
import HelpCenter from './Pages/HelpCenter/HelpCenter'


function App() {

  // const { image, agentName, agentId, accessToken } = useSelector((state) => state.agent);

  const { image, userName, userId, accessToken } = useSelector((state) => state.user);
     
  console.log(image, userName, userId, accessToken, "yyyyyyyyyyyyyy");
  
  return (
    <>
 {/* App page */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
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
          <Route path="/loginandsignup" element={<LoginAndSignuppage />}/>
          <Route path="/ownerdashboard" element={<OwnerDashboard />}/>   
          <Route path="/dashboardpropertydeatil" element={<DashboardPropertyDetail/> }/>                 
          <Route path='/plans'  element={<PlansPage/>}/>
          <Route path="/enquiry-detail" element={<EnquiryDetailLayoutUser/>}/>
          <Route path="/helpcenter" element={<HelpCenter/>}/>

          {/* //agent side */} 
          <Route path='/agent/dashboard' element={<AgentDashboard/>}/>
          <Route path='/agent/plans' element={<AgentPlans/>}/>
          <Route path='/agent/profile' element={<AgentProfile/>}/>
          <Route path='/agent/enquiry' element={<Enquiry/>}/>
          <Route path='/agent/user-enquiry' element={<UserEnquiry/>}/>
          <Route path='/agent/enquiryDetails' element={<EnquiryDetail/>}/>
          <Route path="/agent/property" element={<AgentPropertyListing />}/>
            
       
     
        </Routes>
      </Router>
    </>
  )
}

export default App
