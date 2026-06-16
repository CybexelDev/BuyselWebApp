import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
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
import TermsPage from "./Pages/Terms/TermsPage"
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy'
import RegisterAgent from './Pages/RegisterAgent/RegisterAgent'
import Inbox from './Agent/Pages/Inbox/Inbox'
import { toast } from 'sonner'
import Faqs from './Pages/Faqs/Faqs'
import InvoicePage from './Pages/Invoice/Invoice'
import AgentProtectedRoute from './Agent/Components/ProtectionRouteAgent/ProtectionRouteAgent'
import UserProtectedRoute from './Components/ProtectionRoute/ProtectionRoute'
import CommonProtectedRoute from './Components/CommonProtectionRoute/commonProtectedRoute'

function App() {

  // const { image, agentName, agentId, accessToken } = useSelector((state) => state.agent);
  const { image, userName, userId, accessToken, role, listedCount,remainingProperty } = useSelector((state) => state.user);

  console.log(listedCount, "ppppppppppppppppp");


  return (
    <>
      {/* App page */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/propertyListing" element={<PropertListing />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/propertyDetail/:id" element={<PropertyDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={
            <UserProtectedRoute>
              <Profile />
            </UserProtectedRoute>
          } />
          <Route path="/wishlist" element={
            <UserProtectedRoute>
              <Wishlist />
            </UserProtectedRoute>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agent-detail/:id" element={<AgentDetail />} />
          {/* <Route path='/addyourproperty' element={
            <UserProtectedRoute>
          <Route path='/addyourproperty' element={
              <AddProperty />
          } />
          <Route path="/editproperty/:id" element={
            <UserProtectedRoute>
              
              <AddProperty />
            </UserProtectedRoute>
          } /> */}
          <Route path='/blogdetail' element={<BlogDetailPage />} />
          <Route path='/blog/:id' element={<BlogDetailPage />} />
          <Route path="/loginandsignup" element={<LoginAndSignuppage />} />
          <Route path="/ownerdashboard" element={
            <UserProtectedRoute>
              <OwnerDashboard />
            </UserProtectedRoute>
          } />
          <Route path="/dashboardpropertydetail/:id" element={
            <DashboardPropertyDetail />
          } />
          <Route path='/plans' element={<PlansPage />} />
          <Route path="/enquiry-detail/:id" element={
            <UserProtectedRoute>
              <EnquiryDetailLayoutUser />
            </UserProtectedRoute>
          } />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path='/termsandcondition' element={<TermsPage />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/agent-register' element={
            <UserProtectedRoute>
              <RegisterAgent />
            </UserProtectedRoute>} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/invoice' element={<InvoicePage />} />


          {/* common routeprotected */}
          <>
          <Route
  path="/addyourproperty"
  element={
    <CommonProtectedRoute>
      {remainingProperty>0?(
              <AddProperty />
      )
      : (
      <PlansPage/>
      )}
    </CommonProtectedRoute>
  }
/>

<Route
  path="/editproperty/:id"
  element={
    <CommonProtectedRoute>
      <AddProperty />
    </CommonProtectedRoute>
  }
/>
          
          </>

          {/* //agent side */}
          <>
            <Route path='/agent/dashboard' element={
              <AgentProtectedRoute>
                <AgentDashboard />
              </AgentProtectedRoute>
            }
            />
            <Route path='/agent/plans' element={
              <AgentProtectedRoute>
                <AgentPlans />
              </AgentProtectedRoute>
            } />
            <Route path='/agent/profile' element={
              <AgentProtectedRoute>
                <AgentProfile />
              </AgentProtectedRoute>
            } />
            <Route path='/agent/inbox' element={
              <AgentProtectedRoute>
                <Inbox />
              </AgentProtectedRoute>
            }
            />
            <Route path='/agent/enquiry' element={
              <AgentProtectedRoute>
                <Enquiry />
              </AgentProtectedRoute>
            } />
            <Route path='/agent/user-enquiry' element={
              <AgentProtectedRoute>
                <UserEnquiry />
              </AgentProtectedRoute>
            } />
            <Route path='/agent/enquiry/:id' element={
                <EnquiryDetail />
            } />
            <Route path="/agent/property" element={
              <AgentProtectedRoute>
                <AgentPropertyListing />
              </AgentProtectedRoute>

            } />
          </>
        </Routes>
      </Router>
    </>
  )
}

export default App
