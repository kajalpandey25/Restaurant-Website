import React from "react";
import {MenuList} from '../data/data'
import Layout from "../components/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const Menu = () => {
  return (
    <Layout>
     <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
    {MenuList.map((menu) => (
       <Card sx={{ maxWidth: "390px", display:"flex", m:2}}>
        <CardActionArea>
            <CardMedia  sx={{minHeight:"400px"}} 
            component={'img'} 
            src={menu. image} 
            alt={menu.name}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom={"div"} sx={{color:"black", fontSize:"30px"}}>
                {menu.name}
              </Typography>
              <Typography variant="body2" sx={{color:"gray", fontSize:"15px"}}>
                {menu.description}
              </Typography>
              <Typography sx={{mt:"20px", color:"green", fontSize:"20px"}}>
                {menu.price}
              </Typography>
            </CardContent>
        </CardActionArea>
       </Card>
      ))}

     </Box>
    </Layout>
  );
};

export default Menu;
