import React from "react";
import "./App.css";
import { Box, Grid, Stack, Typography, Avatar } from "@mui/material";
import picture from "./background-image.jpg";
import avatar from "./bgimg.jpg";

function App() {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundImage: `url(${picture})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Grid sx={{ minHeight: "100vh", padding: 3 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Avatar
              sx={{
                height: 250,
                width: 250,
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src={avatar}
            />
            <Stack
              sx={{
                alignItems: "center",
              }}
            >
              {" "}
              <Typography
                variant="h2"
                sx={{ marginTop: 4, color: "#E41BBC", fontWeight: 600 }}
              >
                workmind
              </Typography>
              <Typography
                variant="h4"
                sx={{ marginTop: 4, color: "whitesmoke" }}
              >
                Working Hours Tracing System...
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
