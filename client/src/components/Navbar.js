import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { UserContext } from "../context/UserContext";
import UserEditModal from "./UserEditModal";

const NavLink = ({ children, href }) => <Link to={href}>{children}</Link>;

const Navbar = () => {
  const navigate = useNavigate();
  const { userId } = useContext(UserContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    navigate("/login");
  };

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      px={4}
      pos="fixed"
      w="full"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box></Box>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar size={"2xl"} />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <NavLink href={`/users/${userId}`}>
                  <MenuItem>Your Profile</MenuItem>
                </NavLink>
                <MenuItem onClick={onOpen}>
                  <UserEditModal isOpen={isOpen} onClose={onClose} />
                  Account Settings
                </MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
