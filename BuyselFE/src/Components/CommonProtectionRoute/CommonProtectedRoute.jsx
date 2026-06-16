import { Navigate } from "react-router-dom";

const CommonProtectedRoute = ({ children }) => {
  const persistRoot = JSON.parse(
    localStorage.getItem("persist:root")
  );

  const user = JSON.parse(persistRoot?.user || "{}");
  const agent = JSON.parse(persistRoot?.agent || "{}");

  if (user?.isLoggedIn || agent?.isLoggedIn) {
    return children;
  }

  return <Navigate to="/loginandsignup" replace />;
};

export default CommonProtectedRoute;