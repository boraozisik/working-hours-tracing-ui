import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Avatar } from "@mui/material";
import avatar from "../bgimg.jpg";

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "#F19EE0" }}>
      <Toolbar variant="dense">
        <IconButton edge="start">
          <Avatar src={avatar} />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          sx={{ ml: 1, fontWeight: 600 }}
        >
          workmind
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
