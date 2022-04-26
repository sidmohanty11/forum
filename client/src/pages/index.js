import React from "react";
import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";
import { useQuery } from "@apollo/client";
import { Center, Heading, Skeleton } from "@chakra-ui/react";
import { GET_POSTS } from "../lib/getPosts";

// home page
const Home = () => {
  const { data, error, loading } = useQuery(GET_POSTS);

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
      {data.posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </Layout>
  );
};

export default Home;
