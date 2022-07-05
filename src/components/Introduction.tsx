import React from "react";
import { Grid, Stack, Typography, Avatar } from "@mui/material";
import avatar from "../bgimg.jpg";
import { Counter } from "../workingDay/Counter";

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
              sx={{
                marginTop: 4,
                color: "whitesmoke",
                fontWeight: 700,
                fontFamily: "Montserrat",
              }}
            >
              workmind
            </Typography>
            <Typography
              variant="h4"
              sx={{
                marginTop: 4,
                color: "whitesmoke",
                fontFamily: "Montserrat",
                fontWeight: 400,
              }}
            >
              Working Hours Tracing System...
            </Typography>
            <Typography
              variant="h2"
              sx={{
                marginTop: 10,
                color: "whitesmoke",
                fontWeight: 700,
              }}
            >
              <Counter from={0} to={20543} />
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Introduction;
