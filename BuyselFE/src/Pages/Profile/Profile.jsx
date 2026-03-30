import React, { useEffect, useState } from 'react'
import ProfileHeader from '../../Layouts/Profile/ProfileHeader/ProfileHeader'
import ProfileDashboard from '../../Layouts/Profile/ProfileDashboard/ProfileDashboard'
import { user } from '../../Constance/constance'
import Footer from '../../Components/Footer/Footer'
import RecentEnquiries from '../../Layouts/Profile/RecentEnquiries/RecentEnquiries'

function Profile() {
  const [users,setUsers] = useState([])
  const[mode,setMode]=useState("")
  const[profileData,setProfileData]=useState({})
  console.log(profileData,"88888888888888888888");
  
  useEffect(()=>{
     setUsers(user)
  },[])
  return (
    <div>
     <ProfileHeader  setMode={setMode} setParentProfileData={setProfileData} />
     <ProfileDashboard data={profileData} users={users} mode={mode} setMode={setMode} />
      <RecentEnquiries />
     <Footer />
    </div>
  )
}

export default Profile