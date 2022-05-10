import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <Center height={"80vh"}>
        <Heading>404 | NotFound</Heading>
      </Center>
    </Layout>
  );
};

export default NotFound;
