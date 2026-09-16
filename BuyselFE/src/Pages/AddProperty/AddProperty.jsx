import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

import AddPropertySection from "../../Layouts/AddProperty/AddPropertySection/AddPropertySection";
import AddPropertyHeader from "../../Layouts/AddProperty/AddPropertyHeader/AddPropertyHeader";

function AddProperty() {
  const user = useSelector((state) => state.user);
  const agent = useSelector((state) => state.agent);

  const role = agent?.role || user?.role;

  const remainingProperty = user?.remainingProperty;
  const remainingPropertyAgent = agent?.remainingPropertyAgent;

  console.log("ROLE:", role);
  console.log("remainingProperty:", remainingProperty);
  console.log("remainingPropertyAgent:", remainingPropertyAgent);

  console.log("USER LOADING CONDITION:",
    role === "user" && remainingProperty == null
  );

  console.log("AGENT LOADING CONDITION:",
    role === "agent" && remainingPropertyAgent == null
  );

  if (
    (role === "user" && remainingProperty == null) ||
    (role === "agent" && remainingPropertyAgent == null)
  ) {
    console.log("🔥 RETURNING LOADING");
    return <Loading />;
  }
  if (role === "user" && remainingProperty <= 0) {
    return <Navigate to="/plans" replace />;
  }

  if (role === "agent" && remainingPropertyAgent <= 0) {
    return <Navigate to="/agent/plans" replace />;
  }

  const isAgent = role === "agent";

  return (
    <div>
      {!isAgent && <AddPropertyHeader />}
      <AddPropertySection />
    </div>
  );
}

export default AddProperty;