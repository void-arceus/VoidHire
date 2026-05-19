import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../api/auth.api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const isLoggedIn = !!userData;
  const role = userData?.role || "";

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const user = await getCurrentUser();
      if (user.status === 200) {
        setUserData(user.data.data);
      } else {
        setUserData(null);
      }
    } catch (err) {
      setUserData(null);
    }
  }

  const logoutUser = () => {
    setUserData(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, logoutUser, userData, setUserData, getUser, role }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
