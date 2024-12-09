import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("authToken"); // Check for a valid token

  console.log(children)

  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;