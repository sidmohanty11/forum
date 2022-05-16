import { FC } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiBookOpen,
  FiFeather,
  FiMenu,
  FiAlertCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import { appData } from "../utils/useappjson";

const LinkItems = [
  { name: "Home", icon: FiHome, href: "/" },
  { name: "Trending", icon: FiTrendingUp, href: "/trending" },
  { name: "Discussions", icon: FiBookOpen, href: "/discussion" },
  { name: "Blogs", icon: FiFeather, href: "/blog" },
  { name: "Questions", icon: FiAlertCircle, href: "/question" },
];

const Sidebar: FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("white", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        //@ts-ignore
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav
        //@ts-ignore
        display={{ base: "flex", md: "none" }}
        onOpen={onOpen}
      />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;

const SidebarContent = ({ onClose, ...rest }: { onClose: () => void }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          {appData.college}-Forums
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem: FC<{ icon: IconType; href: string }> = ({
  icon,
  children,
  href,
  ...rest
}) => {
  return (
    <Link to={href} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "black",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }: { onOpen: () => void }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        {appData.college}-Forums
      </Text>
    </Flex>
  );
};
