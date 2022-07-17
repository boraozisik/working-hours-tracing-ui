import React from "react";
import "./App.css";
import { Box, Stack } from "@mui/material";
import picture from "./background-image.jpg";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import { useQuery, useSubscription } from "urql";
import OrderWorkers from "./workingDay/OrderWorkers";
import WorkingDaySelector from "./workingDay/WorkingDaySelector";

const TotalWorkingHoursQuery = `
  query Query {
    totalWorkingHours
  }
`;
const TotalUpdatedQuery = `
  subscription Subscription {
    totalUpdated {
      total
    }
  }
`;
const handleSubscription = (previous: any, newTotal: any) => {
  return newTotal?.totalUpdated?.total;
};

function App() {
  const [res] = useSubscription(
    { query: TotalUpdatedQuery },
    handleSubscription
  );

  const [{ data, fetching, error }] = useQuery({
    query: TotalWorkingHoursQuery,
  });
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <Stack
      sx={{
        textAlign: "center",
        backgroundImage: `url(${picture})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Introduction data={data} res={res} />
      <WorkingDaySelector />
      <OrderWorkers />
    </Stack>
  );
}

export default App;
