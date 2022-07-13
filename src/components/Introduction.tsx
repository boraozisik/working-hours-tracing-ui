import React from "react";
import { Grid, Stack, Typography, Avatar, Box } from "@mui/material";
import avatar from "../bgimg.jpg";
import { Counter } from "../workingDay/Counter";

interface Props {
  data: any;
  res: any;
}

const Introduction = ({ data, res }: Props) => {
  return (
    <Grid container sx={{ padding: 3, mt: 7 }}>
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
              "@media (max-width:600px)": {
                fontSize: "2.4rem",
              },
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
              "@media (max-width:600px)": {
                fontSize: "2.0rem",
              },
            }}
          >
            Working Hours Tracing System...
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h2"
              sx={{
                marginTop: 10,
                color: "whitesmoke",
                fontWeight: 700,
                "@media (max-width:600px)": {
                  fontSize: "2.8rem",
                },
              }}
            >
              <Counter from={0} to={res.data || data.totalWorkingHours} />
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "whitesmoke",
                fontWeight: 300,
              }}
            >
              Total Hours Worked
            </Typography>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Introduction;
