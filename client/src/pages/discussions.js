import { useQuery } from "@apollo/client";
import { AddIcon } from "@chakra-ui/icons";
import { Center, Heading, IconButton, Skeleton } from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";
import { GET_POSTS_BY_CATEGORY } from "../lib/getPostsByCategory";

const Discussions = () => {
  const location = useLocation();
  const category = location.pathname.replace("/", "");
  const { data, error, loading } = useQuery(GET_POSTS_BY_CATEGORY, {
    variables: { category },
  });
  const navigate = useNavigate();

  if (loading) {
    return (
      <Layout>
        <Center py={6} display="flex" flexDir={"column"}>
          <Skeleton
            height={"150px"}
            maxW={"800px"}
            w={"full"}
            rounded={"md"}
            p={6}
            my={4}
          />
          <Skeleton
            height={"150px"}
            maxW={"800px"}
            w={"full"}
            rounded={"md"}
            p={6}
            my={4}
          />
          <Skeleton
            height={"150px"}
            maxW={"800px"}
            w={"full"}
            rounded={"md"}
            p={6}
            my={4}
          />
          <Skeleton
            height={"150px"}
            maxW={"800px"}
            w={"full"}
            rounded={"md"}
            p={6}
            my={4}
          />
        </Center>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Heading>Error Occurred :(</Heading>
      </Layout>
    );
  }

  return (
    <Layout>
      <IconButton
        onClick={() => navigate("/new")}
        aria-label="Add to friends"
        icon={<AddIcon />}
      />
      {data.postsByCategory.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </Layout>
  );
};

export default Discussions;
