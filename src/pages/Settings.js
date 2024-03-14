import React from 'react'
import Box from "@mui/material/Box";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { DrawerHeader } from '../components/DrawerHeader';

export default function Settings() {
  return (
    <>
    <Navbar />
    <Box sx={{ display: "flex" }}>
       <Sidebar />
       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <DrawerHeader />
         <div>Settings</div>
       </Box>
     </Box>
    </>
  )
}
