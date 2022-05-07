import React from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";
import { FiHeart } from "react-icons/fi";
import Layout from "../components/Layout";
import Comment from "../components/Comment";
import { GET_POSTS_BY_ID } from "../lib/getAPost";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import CommentBox from "../components/CommentBox";

const colourSelectionForCategories = {
  discussion: "red.500",
  blog: "blue.500",
  question: "pink.500",
};

const Post = () => {
  const { id } = useParams();
  const { data, error, loading } = useQuery(GET_POSTS_BY_ID, {
    variables: { id },
  });
  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  return (
    <Layout>
      <Center>
        <Box w={"70vw"} border="1px solid #eee" borderRadius="md" p={4}>
          <Text
            style={{ fontWeight: "bold" }}
            fontSize="lg"
            textAlign={"center"}
            p={4}
            bgColor={colourSelectionForCategories[data.postById.category]}
          >
            {data.postById.category.toUpperCase()}
          </Text>
          <Heading mt={4} textAlign={"center"}>
            {data.postById.title}
          </Heading>
          <Text textAlign={"right"}> - by {data.postById.user.name}</Text>
          <Text textAlign={"right"}>
            {" "}
            - Date: {new Date(Number(data.postById.createdAt)).toLocaleString()}
          </Text>
          <MDEditor.Markdown
            source={data.postById.content}
            style={{ backgroundColor: "#fefefe", color: "black" }}
          />
          <Box
            p={5}
            experimental_spaceX={3}
            style={{ display: "flex", alignItems: "center" }}
          >
            <FiHeart size={40} fill="red" color="red" />
            <Text style={{ fontWeight: "bold" }}>
              {data.postById.likes.length} likes
            </Text>
          </Box>
          <CommentBox />
          {data.postById.comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </Box>
      </Center>
    </Layout>
  );
};

export default Post;
