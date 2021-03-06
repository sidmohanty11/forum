import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Center,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { appData } from "../utils/useappjson";
import { Form, Field, Formik } from "formik";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../lib/login";
import { validateEmail, validatePassword } from "../utils/validateAuth";
import { FormikTypes } from "../shared/FormikTypes";

const Login = () => {
  const [signin, { loading }] = useMutation(LOGIN);
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
          <Heading py={4}>LOGIN | {appData.college}-Forums</Heading>
        </Center>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values, actions) => {
            const { data } = await signin({
              variables: { email: values.email, password: values.password },
            });
            if (data.signin.userErrors.length) {
              actions.setErrors({
                email: data.signin.userErrors[0].message,
                password: data.signin.userErrors[0].message,
              });
              return;
            }
            localStorage.setItem("token", data.signin.token);
            actions.setSubmitting(false);
            window.location.href = "/";
          }}
        >
          {({ errors, isSubmitting }) => (
            <Form>
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
                    <Text color={"red.500"}>{form.errors.email}</Text>
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
                    <Text color={"red.500"}>{form.errors.password}</Text>
                  </FormControl>
                )}
              </Field>
              <Text mt={4}>
                Don't have an account yet? <Link to="/register">Register</Link>
              </Text>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={isSubmitting}
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

export default Login;
