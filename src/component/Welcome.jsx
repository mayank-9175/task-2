import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import design from "../images/design.jpg";
import "./Welcome.css";
const Welcome = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const getData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      const data = await fetch("https://task1-backend-mckn.onrender.com/profile", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      const json_data = await data.json();
      console.log(json_data);
      setInfo(json_data.message);
    }
  };
  useEffect(() => {
    getData();
  });
  return (
    <Box className="center">
      <Box className="left">
        <img src={design} alt="logo" />
      </Box>
      <Box className="right">
        <h2 style={{textAlign:"center",fontStyle:"italic",letterSpacing:"3px"}}>Welcome {info.name}</h2>
        <h4 style={{color:"#1d4a35",fontSize:"25px"}}>Serve Great Food, <span style={{color:"#8cc031"}}>Leave Technology To Us!</span></h4>
        <h3 style={{fontSize:"24px",fontWeight:200,color:"#1d4a35"}}>12,000+ Restaurants Run on TMBill – Are You Next? </h3>
        <button className="btn"><a style={{textDecoration:"none",color:"#fff"}} href="https://www.youtube.com/@TMBillSoftware" target="_blank">Visit Our Youtube Channel</a></button>
      </Box>
    </Box>
  );
};

export default Welcome;
