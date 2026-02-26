import React from 'react'
// import ProfileDashboard from '../../Layouts/Profile/ProfileDashboard'
import ProfileHeader from '../../Layouts/Profile/ProfileHeader/ProfileHeader'
import RecentEnquiries from '../../Layouts/Profile/RecentEnquiries/RecentEnquiries'

function Profile() {
  return (
    <div>
     <ProfileHeader/>
     {/* <ProfileDashboard /> */}
     <RecentEnquiries />
    </div>
  )
}

export default Profile