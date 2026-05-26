import { Navigate } from "react-router-dom";

const UserProtectedRoute = ({ children }) => {

  const persistRoot = JSON.parse(
    localStorage.getItem("persist:root")
  );

  const user = JSON.parse(persistRoot?.user || "{}");

  if (!user?.isLoggedIn) {
    return <Navigate to="/loginandsignup" replace />;
  }

  return children;
};

export default UserProtectedRoute;