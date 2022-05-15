import React, { FC, useContext } from "react";
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
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "../lib/getProfile";

type NavLinkProps = {
  href: string
}

const NavLink: FC<NavLinkProps> = ({ children, href }) => (
  <Link to={href}>
    <Button>{children}</Button>
  </Link>
);

const Navbar = () => {
  const { userId, tokenIsPresent } = useContext(UserContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data } = useQuery(GET_PROFILE, {
    variables: { userId },
  });

  const isUserPresent = userId && tokenIsPresent;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    window.location.href = "/login"
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

            {isUserPresent ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={data && data.profile.avatarUrl} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={data && data.profile.avatarUrl} />
                  </Center>
                  <br />
                  <Center>
                    <p>{data && data.profile.user.name}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Link to={`/users/${userId}`}>
                    <MenuItem>Your Profile</MenuItem>
                  </Link>
                  <MenuItem onClick={onOpen}>
                    <UserEditModal isOpen={isOpen} onClose={onClose} />
                    Account Settings
                  </MenuItem>
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Box experimental_spaceX={2}>
                <NavLink href={"/login"}>Login</NavLink>
                <NavLink href={"/register"}>Register</NavLink>
              </Box>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
