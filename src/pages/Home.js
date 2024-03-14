import React from "react";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { DrawerHeader } from "../components/DrawerHeader";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
          <div>Home</div>
        </Box>
      </Box>
    </>
  );
}
