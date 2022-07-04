import React from "react";
import { Grid, Stack, Typography, Avatar } from "@mui/material";
import avatar from "../bgimg.jpg";

const Introduction = () => {
  return (
    <Grid sx={{ minHeight: "100vh", padding: 3, mt: 7 }}>
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
              height: 200,
              width: 200,
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
              sx={{ marginTop: 4, color: "whitesmoke", fontWeight: 600 }}
            >
              workmind
            </Typography>
            <Typography variant="h4" sx={{ marginTop: 4, color: "whitesmoke" }}>
              Working Hours Tracing System...
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Introduction;
