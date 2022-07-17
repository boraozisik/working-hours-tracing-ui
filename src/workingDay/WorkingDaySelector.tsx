import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import DaySelectionPart from "./DaySelectionPart";

type Props = {};

const WorkingDaySelector = (props: Props) => {
  const [step, setStep] = useState(0);

  const [userDetails, setUserDetails] = useState({
    day: 2,
  });

  const next = (values: any = {}) => {
    const mergedDetails = { ...userDetails, ...values };
    setStep(step + 1);
    setUserDetails(mergedDetails);
  };

  const previous = () => {
    setStep(step - 1);
  };

  const pages = [
    <DaySelectionPart next={next} initialDay={userDetails.day} />,
    <Button
      size="small"
      sx={{
        width: "100%",
        backgroundColor: "#839192",
        borderRadius: "50px 50px 50px 50px",
        fontSize: "20px",
        fontWeight: "bold",
        color: "black",
      }}
      onClick={previous}
    >
      Previous
    </Button>,
  ];

  return (
    <Box
      sx={{
        padding: 8,
        background: "white",
        minWidth: "30%",
        ml: "auto",
        mr: "auto",
        borderRadius: "20px 20px 20px 20px",
      }}
    >
      {pages[step]}
    </Box>
  );
};

export default WorkingDaySelector;
