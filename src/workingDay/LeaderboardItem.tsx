import React from "react";
import { WorkingDay } from "../types";
import { Box, Typography, Grid, Avatar, Stack, Button } from "@mui/material";

import avatar from "../worker-avatar.png";
import formatDate from "../utils/formatDate";

interface Props {
  workingDay: WorkingDay;
}

const LeaderboardItem = ({ workingDay }: Props) => {
  return (
    <Grid
      item
      sx={{
        display: "flex",
        boxShadow: "medium",
        padding: 3,
        backgroundColor: "white",
        borderRadius: "20px 20px 20px 20px",
        maxWidth: 1000,
        width: "100%",
      }}
    >
      <Avatar
        sx={{ height: 85, width: 85, backgroundColor: "gray" }}
        src={avatar}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: 1,
          flex: "1",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "Left",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#F19EE0",
              fontSize: "small",
              textTransform: "uppercase",
            }}
          >
            {workingDay.company}
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
            }}
          >
            {workingDay.name}
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
            }}
          >
            {workingDay.message}
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#F19EE0",
              borderRadius: "10px 10px 10px 10px",
              color: "black",
              fontWeight: "bold",
              textTransform: "lowercase",
            }}
          >
            {workingDay.day * 8} hours
          </Button>
          <Typography sx={{ fontSize: "small" }}>
            {formatDate(workingDay.exitedAt)}
          </Typography>
        </Stack>
      </Box>
    </Grid>
  );
};

export default LeaderboardItem;
