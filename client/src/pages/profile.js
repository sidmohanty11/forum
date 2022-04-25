import { Avatar, Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";

// user/:id profile page
const profile = () => {
  return (
    <Layout>
      <Box mt={4}>
        <Center>
          <Avatar
            size={"2xl"}
            src={"https://avatars.dicebear.com/api/male/username.svg"}
          />
        </Center>
        <Center>
          <Heading>Username</Heading>
        </Center>
        <Center>
          <Text>Joined At: 12/12/12 10:30 PM</Text>
        </Center>
        <Center>
          <Text>11 Posts</Text>
        </Center>
      </Box>
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
    </Layout>
  );
};

export default profile;
