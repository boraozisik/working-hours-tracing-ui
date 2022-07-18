import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import DaySelectionPart from "./DaySelectionPart";
import WorkingDetails from "./WorkingDetails";
import { useMutation } from "urql";

const CreateWorkingDay = `
  mutation Mutation($createWorkingDayInput: CreateWorkingDayInput!) {
    createWorkingDay(createWorkingDayInput: $createWorkingDayInput) {
      day
      exitedAt
      id
    }
  }
`;

type Props = {};

const WorkingDaySelector = (props: Props) => {
  const [step, setStep] = useState(0);

  const [userDetails, setUserDetails] = useState({
    day: 3,
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [workingDayResult, createWorkingDay] = useMutation(CreateWorkingDay);

  const next = (values: any = {}) => {
    const mergedDetails = { ...userDetails, ...values };

    if (step === pages.length - 1) {
      submitWorkingDay(mergedDetails);
    } else {
      setStep(step + 1);
      setUserDetails(mergedDetails);
    }
  };

  const previous = () => {
    setStep(step - 1);
  };

  const submitWorkingDay = async (values: any) => {
    await createWorkingDay({ createWorkingDayInput: values });
    setShowConfirmation(true);
  };

  const pages = [
    <DaySelectionPart next={next} initialDay={userDetails.day} />,
    <WorkingDetails next={next} previous={previous} />,
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
      {showConfirmation ? (
        <div>
          Your weekly informations has been taken.Good luck for ranking! You
          have worked {workingDayResult?.data.createWorkingDay?.day * 8} hours
          in this week
        </div>
      ) : (
        pages[step]
      )}
    </Box>
  );
};

export default WorkingDaySelector;
