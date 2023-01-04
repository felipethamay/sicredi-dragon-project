import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Home } from "../ui/pages/home/home";

export default function PrivateRoutes() {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === null) {
    return null;
  }
  
  return (
    !isAuthenticated ? (
      <Home />
    ) : (
      <Navigate to='/' />
    )
  );
}