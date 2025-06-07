import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import "./Login.css";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
const Login = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
    const { setIsLogged } = useContext(AuthContext);
   
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const inputChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    
    const { email, password } = info;
    
      console.log(token)
    try {
      if (!email || !password) {
        alert("Please fill all the details");
      } else if (!email.includes("@")) {
        alert("Enter proper email id");
      } else if (password.length < 6) {
        alert("password must be of 6 characters");
      } else {
        const data = await fetch("https://task1-backend-mckn.onrender.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: info.email,

            password: info.password,
          }),
        });
        const json_data = await data.json();
        if (json_data.status == 201) {
          alert("Login successfully");
          localStorage.setItem("token",json_data.token);
           setIsLogged(true)
          navigate("/profile");
        
        } else {
          navigate("/login");
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  
  };
    useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/profile");
    }
  }, []); 
  return (
    <Box className="form">
      <h1 className="h1">
        WELCOME TO <span className="span">TIMBILL</span>
      </h1>
      <Box>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input
            onChange={inputChange}
            value={info.email}
            name="email"
            type="email"
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
      </Box>
      <br></br>
      <Box>
        <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input
            onChange={inputChange}
            value={info.password}
            name="password"
            type="password"
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
      </Box>
      <br></br>
      <button className="btn" onClick={submit}>
        Login
      </button>
      <p className="style">
        Not Registered ?{" "}
        <NavLink className="span1" to="/register">
          Register Here
        </NavLink>
      </p>
    </Box>
  );
};

export default Login;
