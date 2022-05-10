import React, { FC } from "react";
import { Box, Center, Input } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout: FC = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Sidebar>
        <Box>
          <Center>
            <Input placeholder="search" maxW={800} />
          </Center>
          {children}
        </Box>
      </Sidebar>
    </Box>
  );
};

export default Layout;
