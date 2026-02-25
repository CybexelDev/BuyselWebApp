import React, { useEffect, useState } from 'react'
import ProfileHeader from '../../Layouts/Profile/ProfileHeader/ProfileHeader'
import ProfileDashboard from '../../Layouts/Profile/ProfileDashboard/ProfileDashboard'
import { user } from '../../Constance/constance'

function Profile() {
  const [users,setUsers] = useState([])
  const[mode,setMode]=useState("")
  useEffect(()=>{
     setUsers(user)
  },[])
  return (
    <div>
     <ProfileHeader  setmode={setMode}/>
     <ProfileDashboard users={users} mode={mode} setMode={setMode} />
    </div>
  )
}

export default Profile