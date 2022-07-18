import { VStack } from "@chakra-ui/react";
import { Button, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { InputField } from "../deailsForm/InputField";
import * as yup from "yup";
import { TextareaField } from "../deailsForm/TextAreaField";

const detailsSchema = yup.object().shape({
  name: yup.string().required("Please enter a name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  mobile: yup.string().nullable(),
  company: yup.string().nullable(),
  message: yup.string().nullable(),
});

type Props = {
  next: (values: any) => void;
  previous: () => void;
};

const WorkingDetails = ({ next, previous }: Props) => {
  const submit = (values: any) => {
    next(values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        mobile: "",
        company: "",
        message: "",
      }}
      onSubmit={submit}
      validationSchema={detailsSchema}
    >
      {(formikProps) => (
        <Form>
          <VStack spacing={10} align="stretch">
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
              DETAILS
            </Typography>
            <InputField
              label="Name"
              color="secondary"
              name="name"
              placeholder="Name"
            />
            <InputField
              label="E-mail Address"
              color="secondary"
              name="email"
              placeholder="E-mail Address"
            />
            <InputField
              label="Phone Number"
              color="secondary"
              name="mobile"
              placeholder="Phone Number"
            />
            <InputField
              label="Company"
              color="secondary"
              name="company"
              placeholder="Company"
            />
            <TextareaField
              label="Message"
              name="message"
              placeholder="My weekly message is..."
            />

            <hr />
            <VStack spacing={2}>
              <Button
                size="small"
                type="submit"
                sx={{
                  width: "95%",
                  backgroundColor: "#F19EE0",
                  borderRadius: "50px 50px 50px 50px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Submit
              </Button>

              <Button
                size="small"
                sx={{
                  width: "95%",
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
            </VStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default WorkingDetails;
