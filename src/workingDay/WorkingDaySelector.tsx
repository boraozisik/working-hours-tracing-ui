import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";

type Props = {};

const WorkingDaySelector = (props: Props) => {
  const [step, setStep] = useState(0);

  const next = () => {
    setStep(step + 1);
  };

  const previous = () => {
    setStep(step - 1);
  };

  const pages = [<div>Page 1</div>, <div>Page 2</div>];

  return (
    <Box
      sx={{
        padding: 8,
        background: "white",
        minWidth: "50%",
        ml: "auto",
        mr: "auto",
        borderRadius: "20px 20px 20px 20px",
      }}
    >
      {pages[step]}
      <Stack
        sx={{
          gap: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          size="large"
          sx={{
            width: "100%",
            backgroundColor: "#F19EE0",
            borderRadius: "50px 50px 50px 50px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "black",
          }}
          onClick={next}
        >
          Next
        </Button>
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
        </Button>
      </Stack>
    </Box>
  );
};

export default WorkingDaySelector;
