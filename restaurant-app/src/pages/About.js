import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <Layout>
     <Box sx={{
      my:15,
      textAlign: "center",
      p:2,
      backgroundColor: "whitesmoke",
      "& h4": {
        fontWeight: "bold",
        my:2,
        fontSize: "2rem",
      },
      "& p": {
        textAlign: "justify",
      },
      "@media (max-width:600px)": {
        mt:0,
       "& h4": {
        fontSize: "1.5rem",
       } 
      },
    }}>
      <Typography variant="h4">
        Welcome to My Restaurant
      </Typography>
      <p>
      "Welcome to My Restaurant! Step into a world of culinary delight where flavors come to life. Explore our carefully crafted menu that offers a symphony of tastes, each dish a masterpiece designed to tantalize your senses. Whether you're joining us for a romantic dinner, a family gathering, or a casual lunch, we invite you to savor the experience that awaits you.  </p>
       <br/>
      <p>
      Our commitment to exceptional service and a warm ambiance ensures that every visit is a memorable one. Thank you for choosing [My Restaurant], where every meal is an unforgettable journey."
        </p>
    
     </Box>
    </Layout>
  )
}

export default About;





