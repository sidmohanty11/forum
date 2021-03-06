import React, { FC } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import moment from "moment";
import { PostType } from "../shared/PostType";

const colourSelectionForCategories = {
  discussion: "red.500",
  blog: "blue.500",
  question: "pink.500",
};

const colourSelectionForLikesBg = {
  discussion: "red.200",
  blog: "blue.200",
  question: "pink.200",
};

type PostPreviewProps = {
  post: PostType;
};

const PostPreview: FC<PostPreviewProps> = ({ post }) => {
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
        <Link to={`/posts/${post.id}`}>
          <Stack>
            <Text
              color={colourSelectionForCategories[post.category]}
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
              {!post.published && (
                <Badge ml={2} variant="outline" colorScheme="red">
                  UNPUBLISHED
                </Badge>
              )}
            </Heading>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Box
              display="flex"
              bgColor={colourSelectionForLikesBg[post.category]}
              rounded="md"
              p={2}
              alignItems={"center"}
              experimental_spaceX={1}
            >
              <FiHeart /> <Text>{post.likes.length}</Text>
            </Box>
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>{post.user.name}</Text>
              <Text color={"gray.500"}>
                {moment(Number(post.createdAt)).fromNow()}
              </Text>
            </Stack>
          </Stack>
        </Link>
      </Box>
    </Center>
  );
};

export default PostPreview;
