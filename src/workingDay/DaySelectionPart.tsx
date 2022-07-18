import {
  NumberInput,
  NumberInputField,
  SimpleGrid,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ButtonCard from "./ButtonCard";
import { Box, Button, Stack, Typography } from "@mui/material";

type Props = {
  next: (values: any) => void;
  initialDay: number;
};

const options = [2, 3, 4, 6];

const DaySelectionPart = ({ next, initialDay }: Props) => {
  const [days, setDays] = useState(initialDay);
  const [customDays, setCustomDays] = useState(
    "" + (options.includes(days) ? "" : days)
  );

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "days",
    value: days,
    onChange: (nextValue) => {
      setCustomDays("");
      setDays(parseInt(nextValue));
    },
  });

  const group = getRootProps();

  const nextPage = () => {
    next({ day: days });
  };

  return (
    <VStack spacing={4} align="stretch">
      <Typography
        variant="h6"
        color="#EC7063"
        sx={{
          "@media (max-width:600px)": {
            fontSize: "0.8rem",
          },
          fontWeight: "bold",
        }}
      >
        #JOINTHERANKING
      </Typography>
      <Typography
        variant="body1"
        color="black"
        sx={{
          "@media (max-width:600px)": {
            fontSize: "0.7rem",
          },
          fontWeight: "bold",
        }}
      >
        Enter your weekly working informations
      </Typography>
      <hr />
      <SimpleGrid mt={5} columns={2} spacing={2} {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value, enterKeyHint: undefined });
          return (
            <ButtonCard key={value} {...radio}>
              {value} days
            </ButtonCard>
          );
        })}
      </SimpleGrid>
      <NumberInput
        onFocus={() => setDays(0)}
        onChange={(value) => {
          setDays(parseInt(value));
          setCustomDays(value);
        }}
        value={customDays}
      >
        <NumberInputField
          placeholder="Other day input..."
          height={40}
          fontSize="large"
          borderRadius="15px 15px 15px 15px"
          borderWidth="2px"
          borderColor="#9B59B6"
          mb={7}
        />
      </NumberInput>
      <hr />
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
        onClick={nextPage}
      >
        Next
      </Button>
    </VStack>
  );
};

export default DaySelectionPart;
