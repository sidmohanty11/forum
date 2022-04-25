import { Box, Center, Input } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import PostPreview from "../components/PostPreview";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Sidebar>
        <Box>
          <Center>
            <Input placeholder="search" maxW={800} />
          </Center>
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
        </Box>
      </Sidebar>
    </Box>
  );
};

export default Home;
