import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";
import { useQuery } from "@apollo/client";
import { Center, Heading, IconButton, Skeleton } from "@chakra-ui/react";
import { GET_POSTS } from "../lib/getPosts";
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

// home page
const Home = () => {
  const { userId } = useContext(UserContext);
  const isUserPresent = userId && localStorage.getItem("token");
  const { data, error, loading, refetch } = useQuery(GET_POSTS);
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, [refetch]);

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
      {isUserPresent && (
        <IconButton
          onClick={() => navigate("/new")}
          aria-label="Add to friends"
          icon={<AddIcon />}
        />
      )}
      {data.posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </Layout>
  );
};

export default Home;
