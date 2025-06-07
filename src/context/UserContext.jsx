import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 👇 Context
export const AuthContext = createContext();

// 👇 Provider wrapper
const UserContext = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userData,setUserData] = useState({})
  const [token,setToken] = useState("")
  // const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
//     const getData = async() => {
// const token = localStorage.getItem("token");
//        if(!token){
//           navigate("/login")
//           setLoading(false);
//        }
//        else{
//         try{
//          const data = await fetch("http://localhost:8000/profile",{
//             method:"GET",
//             headers:{
//                 Authorization:token
//             }
//          })
//          const json_data = await data.json();
//         //  console.log(json_data)
//          setUserData(json_data.message)
//         //  console.log(userData)
//        }
//       catch (err) {
//         console.error("Error fetching user:", err);
//         setIsLogged(false);
//       } finally {
//         setLoading(false);
//       }

//     }
// }
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogged(!!token);
    setToken(token)
    // getData()
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged,userData,token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
