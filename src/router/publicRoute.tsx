import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Home } from "../ui/pages/home/home";

export default function PublicRoutes() {
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', 'false');
  }, [])
  
  if (isAuthenticated === null) {
    return null;
  }
  
  return (
    isAuthenticated ? (
      <Home />
    ) : (
      <Navigate to='/home' />
    )
  );
}