import { useQuery } from "@apollo/client";
import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Heading,
  IconButton,
  Skeleton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";
import { GET_POSTS_BY_CATEGORY } from "../lib/getPostsByCategory";
import { PostType } from "../shared/PostType";

const Blogs = () => {
  const [counter, setCounter] = useState(0);
  const location = useLocation();
  const category = location.pathname.replace("/", "");
  const { data, error, loading, refetch } = useQuery(GET_POSTS_BY_CATEGORY, {
    variables: { category, skip: counter },
  });
  const navigate = useNavigate();
  const [noOfPosts, setNoOfPosts] = useState(data?.postsByCategory.length);

  useEffect(() => {
    refetch();
    setNoOfPosts(data?.postsByCategory.length);
  }, [refetch, data?.postsByCategory.length]);

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
      {data.postsByCategory.map((post: PostType) => (
        <PostPreview key={post.id} post={post} />
      ))}
      {noOfPosts < 5 && counter !== 0 && (
        <Button
          onClick={() => {
            setCounter((prev) => {
              if (prev === 0) {
                return 0;
              }
              return prev - 10
            });
          }}
        >
          Back
        </Button>
      )}
      {noOfPosts === 10 && <Button onClick={() => {
        setCounter((prev) => prev + 10)
      }}>Next</Button>}
    </Layout>
  );
};

export default Blogs;
