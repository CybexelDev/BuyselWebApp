import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const AgentProtectedRoute = ({ children }) => {
  const location = useLocation();

  const agent = useSelector((state) => state.agent);

  if (!agent?.isLoggedIn) {
    return <Navigate to="/loginandsignup" replace />;
  }

  const basicAgentRoutes = [
    "/agent/profile",
    "/agent/user-enquiry",
    "/agent/inbox",
  ];

  if (
    agent?.agent_type === "basic" &&
    !basicAgentRoutes.includes(location.pathname)
  ) {
    return <Navigate to="/agent/profile" replace />;
  }

  return children;
};

export default AgentProtectedRoute;