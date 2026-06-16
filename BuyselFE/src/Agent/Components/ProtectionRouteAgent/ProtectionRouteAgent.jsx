import { Navigate } from "react-router-dom";

const AgentProtectedRoute = ({ children }) => {

  const persistRoot = JSON.parse(
    localStorage.getItem("persist:root")
  );

  const agent = JSON.parse(persistRoot?.agent || "{}");
    console.log("Agent State:", agent);
  console.log("isLoggedIn:", agent?.isLoggedIn);

  if (!agent?.isLoggedIn) {
    return <Navigate to="/loginandsignup" replace />;
  }

  return children;
};

export default AgentProtectedRoute;