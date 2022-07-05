import React from "react";
import "./App.css";
import { Box, Stack } from "@mui/material";
import picture from "./background-image.jpg";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";

function App() {
  return (
    <Stack
      sx={{
        textAlign: "center",
        backgroundImage: `url(${picture})`,
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Introduction />
    </Stack>
  );
}

export default App;
