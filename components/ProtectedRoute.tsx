import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../contexts/AuthContext";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const auth = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!auth?.isAuthenticated) {
      router.push("/login");
    }
  }, [auth?.isAuthenticated, router]);

  if (!auth?.isAuthenticated) {
    return null; 
  }

  return children;
};

export default ProtectedRoute;
