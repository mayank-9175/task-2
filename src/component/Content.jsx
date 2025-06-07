import React from "react";
import Box from "@mui/material/Box";
import img from "../images/home.png"
import Typography from "@mui/material/Typography";
import "./Content.css"
const Content = () => {
    return(
       <Box className="center">
          <Box className="left">
              <img src={img} alt="logo"/>
          </Box>
          <Box className="right">
            <h1>Restaurant Operating System</h1>
            <Typography className="p">
                TMBill stands as a premier provider of cloud-based, comprehensive technology solutions tailored for a diverse range of food businesses including Restaurants, Bars, Cafés, QSRs, Ice-cream Shops, Bakeries, and Cake Shops.
Our suite of services empowers food establishments, from individual outlets to expansive chains, to efficiently manage crucial operations such as billing, QR Code Ordering Platform, CRM, Customer Loyalty programs, Aggregator integrations, Analytics, Inventory, Recipe and Wastage Management, Centralized Menu Management, Vendor Management, and more.

With a global footprint, TMBill has garnered the trust of over 12,000+ customers spanning 350+ cities and 30+ countries.
            </Typography>
          </Box>
       </Box>
    )
}

export default Content