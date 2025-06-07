import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import "./Register.css";
import Button from "@mui/material/Button";
import { NavLink,useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate()
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const inputChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const validatePassword = (newPassword) => {
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (
      newPassword.length < minNumberofChars ||
      newPassword.length > maxNumberofChars
    ) {
      return false;
    }
    if (!regularExpression.test(newPassword)) {
      alert(
        "password should contain atleast one number and one special character"
      );
      return false;
    }
  };
  const submit = async (e) => {
    e.preventDefault();
    const { name, email, phone, password } = info;
    const regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const status = validatePassword(password);
    try {
      if (!name || !email || !phone || !password) {
        alert("Please fill all the details");
      } else if (!email.includes("@")) {
        alert("Enter proper email id");
      } else if (phone.length > 10 || phone.length < 10) {
        alert("Phone number must be of 10 numbers");
      } else if (password.length < 6) {
        alert("password must be of 6 characters");
      } else if (status == false) {
        alert(
          "password should contain atleast one number and one special character"
        );
      } else {
        // const data = await fetch("http://localhost:8000/register", {
        const data = await fetch("https://task1-backend-mckn.onrender.com/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: info.name,
            email: info.email,
            phone: info.phone,
            password: info.password,
          }),
        });
        const json_data = await data.json()
        if(json_data.status==201){
          alert("Registered successfully")
          navigate("/login")
        }
        else{
          navigate("/register")
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
          <InputLabel htmlFor="my-input">Name</InputLabel>
          <Input
            name="name"
            value={info.name}
            onChange={inputChange}
            type="text"
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
      </Box>
      <br></br>
      <Box>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input
            name="email"
            value={info.email}
            onChange={inputChange}
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
          <InputLabel htmlFor="my-input">Phone Number</InputLabel>
          <Input
            name="phone"
            value={info.phone}
            onChange={inputChange}
            id="my-input"
            type="number"
            aria-describedby="my-helper-text"
          />
        </FormControl>
      </Box>
      <br></br>
      <Box>
        <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input
            name="password"
            value={info.password}
            onChange={inputChange}
            type="password"
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
      </Box>
      <br></br>
      <button className="btn" onClick={submit}>
        Register
      </button>
      <p className="style">
        Already Registered ?{" "}
        <NavLink className="span1" to="/login">
          Login Here
        </NavLink>
      </p>
    </Box>
  );
};

export default Register;
