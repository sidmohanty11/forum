import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";
import { FiHeart } from "react-icons/fi";
import Layout from "../components/Layout";
import Comment from "../components/Comment";
import { GET_POSTS_BY_ID } from "../lib/getAPost";
import { UPDATE_POST } from "../lib/updatePost";
import { DELETE_POST } from "../lib/deletePost";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import CommentBox from "../components/CommentBox";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { UserContext } from "../context/UserContext";
import MarkdownEditor from "../components/MarkdownEditor";

const colourSelectionForCategories = {
  discussion: "red.500",
  blog: "blue.500",
  question: "pink.500",
};

const Post = () => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("");
  const { userId } = useContext(UserContext);
  const { id } = useParams();
  const { data, error, loading } = useQuery(GET_POSTS_BY_ID, {
    variables: { id },
  });
  const [updatePost] = useMutation(UPDATE_POST);
  const [deletePost] = useMutation(DELETE_POST);

  useEffect(() => {
    if (!loading) {
      setEditMode(data.postById.content);
    }
  }, [loading, data]);

  function editPost() {
    if (!value || !userId) {
      return;
    }

    updatePost({
      variables: {
        postId: id,
        post: {
          title: data.postById.title,
          category: data.postById.category,
          content: value,
        },
      },
    });

    setEditMode(false);
  }

  function removePost() {
    if (!userId) {
      return;
    }

    deletePost({ variables: { postId: id } });
  }

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
          {userId === data.postById.user.id && (
            <Button
              onClick={() => {
                setEditMode((prev) => !prev);
              }}
            >
              <EditIcon />
              <Text>Edit</Text>
            </Button>
          )}
          {userId === data.postById.user.id && (
            <Button onClick={removePost}>
              <DeleteIcon />
              <Text>Delete</Text>
            </Button>
          )}
          <Text textAlign={"right"}> - by {data.postById.user.name}</Text>
          <Text textAlign={"right"}>
            {" "}
            - Date: {new Date(Number(data.postById.createdAt)).toLocaleString()}
          </Text>
          {!editMode ? (
            <MDEditor.Markdown
              source={data.postById.content}
              style={{ backgroundColor: "#fefefe", color: "black" }}
            />
          ) : (
            <>
              <MarkdownEditor value={value} setValue={setValue} />
              <Button onClick={editPost}>Submit</Button>
            </>
          )}
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
          <CommentBox postId={id} />
          {data.postById.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} postId={id} />
          ))}
        </Box>
      </Center>
    </Layout>
  );
};

export default Post;
