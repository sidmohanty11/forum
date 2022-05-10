import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  Skeleton,
  SkeletonCircle,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";
import { GET_PROFILE } from "../lib/getProfile";
import UserEditModal from "../components/UserEditModal";
import { PostType } from "../shared/PostType";

// user/:id profile page
const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  const { data, loading, error, refetch } = useQuery(GET_PROFILE, {
    variables: {
      userId: id,
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return (
      <Layout>
        <Center py={6} display="flex" flexDir={"column"}>
          <SkeletonCircle size="100" />
          <Skeleton w={"full"} p={6} my={4} height={"14px"} maxW={"300px"} />
          <Skeleton w={"full"} p={6} my={4} height={"14px"} maxW={"300px"} />
          <Skeleton w={"full"} p={6} my={4} height={"14px"} maxW={"300px"} />
          <Skeleton w={"full"} p={6} my={4} height={"14px"} maxW={"300px"} />
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

  const { profile } = data;

  return (
    <Layout>
      <Box mt={4}>
        <Center>
          <Avatar size={"2xl"} src={profile.avatarUrl} />
        </Center>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          flexDir="column"
        >
          <Heading>{profile.user.name}</Heading>
          <Text>
            Joined At: {new Date(Number(profile.createdAt)).toLocaleString()}
          </Text>
          <Text>Bio: {profile.bio}</Text>
          <Text>
            Branch: {profile.branch ? profile.branch : "Not provided"}
          </Text>
          <Text>Year: {profile.year ? profile.year : "Not provided"}</Text>
          <Button mt={4} onClick={onOpen}>
            Edit Profile
          </Button>
          <UserEditModal isOpen={isOpen} onClose={onClose} />
        </Box>
      </Box>
      {profile.user.posts.map((post: PostType) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </Layout>
  );
};

export default Profile;
