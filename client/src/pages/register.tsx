import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Container,
  Center,
  Box,
  Heading,
} from "@chakra-ui/react";
import { Form, Field, Formik } from "formik";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../lib/signup";
import {
  validateEmail,
  validatePassword,
  validateRegNo,
  validateStringPresent,
} from "../utils/validateAuth";
import { FormikTypes } from "../shared/FormikTypes";

const Register = () => {
  const [signup, { loading }] = useMutation(SIGNUP);
  // TODO
  if (loading) {
    <p>Loading...</p>;
  }

  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      height="100vh"
    >
      <Container boxShadow={"xl"} rounded={"md"} p={6}>
        <Center>
          <Heading py={4}>REGISTER | OUTR-Forums</Heading>
        </Center>
        <Formik
          initialValues={{
            email: "",
            password: "",
            regNo: "",
            name: "",
            bio: "",
          }}
          onSubmit={async (values, actions) => {
            const { data } = await signup({
              variables: {
                email: values.email,
                password: values.password,
                bio: values.bio,
                regNo: values.regNo,
                name: values.name,
              },
            });
            if (data.signup.userErrors.length) {
              actions.setErrors({
                email: data.signup.userErrors[0].message,
                password: data.signup.userErrors[0].message,
                bio: data.signup.userErrors[0].message,
                regNo: data.signup.userErrors[0].message,
                name: data.signup.userErrors[0].message,
              });
              return;
            }
            localStorage.setItem("token", data.signup.token);
            actions.setSubmitting(false);
            window.location.href = "/";
          }}
        >
          {(props) => (
            <Form>
              <Field name="name" validate={validateStringPresent}>
                {({ field, form }: FormikTypes) => (
                  <FormControl>
                    <FormLabel mt={4} htmlFor="name">
                      Name
                    </FormLabel>
                    <Input
                      {...field}
                      type="text"
                      id="name"
                      placeholder="Name"
                    />
                    <Text color="red.500">{form.errors.name}</Text>
                  </FormControl>
                )}
              </Field>
              <Field name="regNo" validate={validateRegNo}>
                {({ field, form }: FormikTypes) => (
                  <FormControl>
                    <FormLabel mt={4} htmlFor="regNo">
                      Registration Number
                    </FormLabel>
                    <Input
                      {...field}
                      type="text"
                      id="regNo"
                      placeholder="Registration Number"
                    />
                    <Text color="red.500">{form.errors.regNo}</Text>
                  </FormControl>
                )}
              </Field>
              <Field name="bio" validate={validateStringPresent}>
                {({ field, form }: FormikTypes) => (
                  <FormControl>
                    <FormLabel mt={4} htmlFor="bio">
                      Bio
                    </FormLabel>
                    <Input {...field} type="text" id="bio" placeholder="Bio" />
                    <Text color="red.500">{form.errors.bio}</Text>
                  </FormControl>
                )}
              </Field>
              <Field name="email" validate={validateEmail}>
                {({ field, form }: FormikTypes) => (
                  <FormControl>
                    <FormLabel mt={4} htmlFor="email">
                      Email
                    </FormLabel>
                    <Input
                      {...field}
                      type="email"
                      id="email"
                      placeholder="Email"
                    />
                    <Text color="red.500">{form.errors.email}</Text>
                  </FormControl>
                )}
              </Field>
              <Field name="password" validate={validatePassword}>
                {({ field, form }: FormikTypes) => (
                  <FormControl>
                    <FormLabel mt={4} htmlFor="password">
                      Password
                    </FormLabel>
                    <Input
                      {...field}
                      type="password"
                      id="password"
                      placeholder="Password"
                    />
                    <Text color="red.500">{form.errors.password}</Text>
                  </FormControl>
                )}
              </Field>
              <Text mt={4}>
                Already have an account? <Link to="/login">Login</Link>
              </Text>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default Register;
