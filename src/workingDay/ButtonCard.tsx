import { useRadio, Box, UseRadioProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props extends UseRadioProps {
  children: ReactNode;
}

const ButtonCard = (props: Props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        height={40}
        borderRadius="15px 15px 15px 15px"
        boxShadow="md"
        fontSize="large"
        _checked={{
          bg: "#9B59B6",
          color: "white",
          borderColor: "teal",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={2}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default ButtonCard;
