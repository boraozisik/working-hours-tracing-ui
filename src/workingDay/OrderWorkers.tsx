import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import LeaderboardItem from "./LeaderboardItem";
import { WorkingDay } from "../types";
import { useQuery } from "urql";

const WorkingDaysQuery = `
  query Query($orderBy: OrderByParams) {
    workingDays(orderBy: $orderBy) {
      day
      id
      name
      exitedAt
      message
      company
    }
  }
`;

type WorkingDaysQueryRes = {
  workingDays: WorkingDay[];
};

interface Props {}

const OrderWorkers = (props: Props) => {
  const [field, setOrderByField] = useState("exitedAt");
  const [{ data, fetching, error }] = useQuery<WorkingDaysQueryRes>({
    query: WorkingDaysQuery,
    variables: {
      orderBy: {
        field,
        direction: "desc",
      },
    },
  });

  if (error) return <p>Something went wrong...</p>;
  if (fetching || !data) return <p>Loading...</p>;
  return (
    <Box sx={{ width: "100%", mt: 10 }}>
      <Typography
        variant="h2"
        color="whitesmoke"
        sx={{
          "@media (max-width:600px)": {
            fontSize: "1.7rem",
          },
        }}
      >
        LEADERBOARD
      </Typography>

      <FormControl sx={{ color: "whitesmoke" }}>
        <RadioGroup
          row
          value={field}
          onChange={(e) => setOrderByField(e.target.value)}
        >
          <FormControlLabel
            value="exitedAt"
            control={
              <Radio
                sx={{
                  color: "whitesmoke",
                  "&.Mui-checked": {
                    color: "#F19EE0",
                  },
                }}
              />
            }
            label="Most Recent"
          />
          <FormControlLabel
            value="day"
            control={
              <Radio
                sx={{
                  color: "whitesmoke",
                  "&.Mui-checked": {
                    color: "#F19EE0",
                  },
                }}
              />
            }
            label="Most Hours"
          />
        </RadioGroup>
      </FormControl>
      <Stack
        sx={{
          gap: 4,
          mt: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {data.workingDays.map((workingDay) => (
          <LeaderboardItem key={workingDay.id} workingDay={workingDay} />
        ))}
      </Stack>
    </Box>
  );
};

export default OrderWorkers;
