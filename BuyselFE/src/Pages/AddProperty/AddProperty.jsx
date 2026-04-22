import React from 'react'
import { useSelector } from "react-redux";

import AddPropertySection from '../../Layouts/AddProperty/AddPropertySection/AddPropertySection'
import AddPropertyHeader from '../../Layouts/AddProperty/AddPropertyHeader/AddPropertyHeader'

function AddProperty() {

const userId = useSelector((state) => state.user.userId);
const agentId = useSelector((state) => state.agent.agentId);

  console.log("userId:", userId);
  console.log("agentId:", agentId);

  const isAgent = agentId && !userId;

  return (
    <div>
      {!isAgent && <AddPropertyHeader />}
      <AddPropertySection />
    </div>
  )
}

export default AddProperty