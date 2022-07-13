import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import LeaderboardItem from "./LeaderboardItem";

interface Props {}

const OrderWorkers = (props: Props) => {
  return (
    <Box sx={{ width: "100%", mt: 10 }}>
      <Typography
        variant="h2"
        color="whitesmoke"
        sx={{
          "@media (max-width:600px)": {
            fontSize: "1.5rem",
          },
        }}
      >
        LEADERBOARD
      </Typography>
      <Stack
        sx={{
          gap: 4,
          mt: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LeaderboardItem
          workingDay={{
            name: "bora",
            day: 5,
            exitedAt: "1994-11-05T08:15:30-05:00",
            company: "company",
            message: "some message",
          }}
        />
        <LeaderboardItem
          workingDay={{
            name: "bora",
            day: 5,
            exitedAt: "1994-11-05T08:15:30-05:00",
            company: "company",
            message: "some message",
          }}
        />
        <LeaderboardItem
          workingDay={{
            name: "bora",
            day: 5,
            exitedAt: "1994-11-05T08:15:30-05:00",
            company: "company",
            message: "some message",
          }}
        />
      </Stack>
    </Box>
  );
};

export default OrderWorkers;
