import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";

const UserProtectedRoute = ({ children, message }) => {
  const persistRoot = JSON.parse(
    localStorage.getItem("persist:root")
  );

  const user = JSON.parse(persistRoot?.user || "{}");

  useEffect(() => {
    if (!user?.isLoggedIn && message) {
      toast.error(message, {
        id: "login-required",
      });
    }
  }, [user?.isLoggedIn, message]);

  if (!user?.isLoggedIn) {
    return <Navigate to="/loginandsignup" replace />;
  }

  return children;
};

export default UserProtectedRoute;