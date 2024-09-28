import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { auth } = useSelector((store) => store);
  
  if (!auth.user) {
    // If user is not authenticated, redirect to login
    return <Navigate to="/login" />;
  }

  if (auth.user.role !== "ADMIN") {
    // If user is authenticated but not an admin, redirect to homepage or unauthorized page
    return <Navigate to="/" />;
  }

  // If authenticated and admin, render the children components (e.g., AdminPanel)
  return children;
};

export default ProtectedRoute;
