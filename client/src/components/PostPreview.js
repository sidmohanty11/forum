import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";

const PostPreview = ({ post }) => {
  return (
    <Center py={6}>
      <Box
        maxW={"800px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {post.category}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {post.title}
          </Heading>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <FiHeart /> <Text>{post.likes.length}</Text>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>{post.user.name}</Text>
            <Text color={"gray.500"}>
              {new Date(Number(post.createdAt)).toLocaleString()}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default PostPreview;
