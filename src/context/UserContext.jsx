import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userData,setUserData] = useState({})
  const [token,setToken] = useState("")
    const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogged(!!token);
    setToken(token)

  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged,userData,token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
