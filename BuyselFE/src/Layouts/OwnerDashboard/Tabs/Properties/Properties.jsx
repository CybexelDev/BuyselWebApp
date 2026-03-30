import React from 'react'
import { useNavigate } from "react-router-dom";
import PropertyListingLayout from '../../../../Agent/Layouts/propertyListing/propertyListingLayout'

function Properties() {
  const navigate = useNavigate();

  return (
    <div>
      <PropertyListingLayout
        showSidebar={false}
        showEdit={false}
        bg=""
        lg="lg:py-0"
        onClick={() => navigate("/dashboardpropertydeatil")}
      />
    </div>
  )
}

export default Properties