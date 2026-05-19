

import React from 'react'
import { useSelector } from "react-redux";

import AddPropertySection from '../../Layouts/AddProperty/AddPropertySection/AddPropertySection'
import AddPropertyHeader from '../../Layouts/AddProperty/AddPropertyHeader/AddPropertyHeader'

function AddProperty() {

  const user = useSelector((state) => state.user);
  const agent = useSelector((state) => state.agent);

  const role = agent?.role || user?.role;

  const isAgent = role === "agent";

  console.log("ROLE:", role);

  return (
    <div>
      {!isAgent && <AddPropertyHeader />}
      <AddPropertySection />
    </div>
  )
}

export default AddProperty;

