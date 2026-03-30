import React from 'react'
import AddPropertyBanner from '../../Components/AgentDetail/AddPropertyBanner/AddPropertyBanner'
import AddPropertyHeader from '../../Layouts/AddProperty/AddPropertyHeader/AddPropertyHeader'
import AgentRegistration from '../../Layouts/RegisterAgent/RegisterAgentForm'
import { useState } from 'react'
import AppPromoBanner from '../../Components/AppPromoBanner/AppPromoBanner'
import Footer from '../../Components/Footer/Footer'
function RegisterAgent() {
  const [formData, setFormData] = useState({});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};


  return (
    <div>
        <AddPropertyHeader title="Register as Agent" subtitle="Create your agent profile and manage listings"/>
<AgentRegistration
  formData={formData}
  handleChange={handleChange}
  setFormData={setFormData}
/>
<AppPromoBanner/>
<Footer/>
    </div>
  )
}

export default RegisterAgent