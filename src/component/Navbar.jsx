import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../images/logo.avif";
import { NavLink, useNavigate } from "react-router";
import "./Navbar.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AuthContext } from "../context/UserContext";
const Navbar = () => {
  const { isLogged, setIsLogged, userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false); 
    navigate("/login");
  };
  return (
    <AppBar
      position="static"
      className="header"
      style={{ backgroundColor: "#fff", height: "100px" }}
    >
      <Toolbar>
        <Box className="div">
          <img className="img" src={logo} alt="logo" />
          <Box className="link">
            {!isLogged ? (
              <>
                <NavLink className="a" to="/register">
                  Register
                </NavLink>
                <NavLink className="a" to="/login">
                  Login
                </NavLink>
              </>
            ) : (
              <>
              
                <NavLink onClick={handleLogout} className="a" to="#">
                  Logout
                </NavLink>
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
