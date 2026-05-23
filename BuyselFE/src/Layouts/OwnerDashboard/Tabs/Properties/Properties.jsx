import React from 'react'
import { useNavigate } from "react-router-dom";
import PropertyListingLayout from '../../../../Agent/Layouts/propertyListing/propertyListingLayout'

function Properties() {
  const navigate = useNavigate();

  return (
    <div>
      <PropertyListingLayout
        showSidebar={false}
        bg=""
        lg="lg:py-0"

      />
    </div>
  )
}

export default Properties