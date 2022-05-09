import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { Avatar, Box, Button, Heading, Text } from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";
import { TiHeart, TiHeartOutline } from "react-icons/ti";
import Layout from "../components/Layout";
import Comment from "../components/Comment";
import { GET_POSTS_BY_ID } from "../lib/getAPost";
import { UPDATE_POST } from "../lib/updatePost";
import { DELETE_POST } from "../lib/deletePost";
import { LIKE_OR_DISLIKE_POST } from "../lib/likeOrDislikePost";
import { useMutation, useQuery } from "@apollo/client";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("");
  const { userId } = useContext(UserContext);
  const { id } = useParams();
  const { data, error, loading, refetch } = useQuery(GET_POSTS_BY_ID, {
    variables: { id },
  });
  const [updatePost] = useMutation(UPDATE_POST);
  const [deletePost] = useMutation(DELETE_POST);
  const [likePost] = useMutation(LIKE_OR_DISLIKE_POST);

  const [isLiked, setIsLiked] = useState(
    data?.postById.likes.find((id) => id === userId)
  );
  const [totalLikes, setTotalLikes] = useState(data?.postById.likes.length);

  useEffect(() => {
    if (!loading && !error) {
      setValue(data.postById.content);
    }
  }, [loading, data, error]);

  useEffect(() => {
    refetch();
    if (!loading && !error) {
      setIsLiked(data.postById.likes.find((id) => id === userId));
      setTotalLikes(data.postById.likes.length);
    }
  }, [refetch, data, userId, loading, error]);

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

    refetch();

    setEditMode(false);
  }

  function removePost() {
    if (!userId) {
      return;
    }

    deletePost({ variables: { postId: id } });

    navigate("/");
  }

  async function likeOrDislikePost() {
    if (!userId) {
      return;
    }

    await likePost({
      variables: {
        postId: id,
      },
    });

    if (isLiked) {
      setIsLiked(false);
      setTotalLikes((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setTotalLikes((prev) => prev + 1);
    }
  }

  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <Layout>
      <Box p={4}>
        <Text
          style={{ fontWeight: "bold" }}
          fontSize="lg"
          textAlign={"center"}
          p={4}
          bgColor={colourSelectionForCategories[data.postById.category]}
        >
          {data.postById.category.toUpperCase()}
        </Text>
        <Heading mt={4}>{data.postById.title}</Heading>
        {userId === data.postById.user.id && (
          <Box
            display={"flex"}
            justifyContent="flex-end"
            experimental_spaceX={3}
          >
            <Button
              onClick={() => {
                setEditMode((prev) => !prev);
              }}
            >
              <EditIcon />
              <Text>Edit</Text>
            </Button>
            <Button onClick={removePost}>
              <DeleteIcon />
              <Text>Delete</Text>
            </Button>
          </Box>
        )}
        <Box display={"flex"} experimental_spaceX={3} mt={3}>
          <Avatar src={data.postById.user.profile.avatarUrl} />
          <Box>
            <Link to={`/users/${data.postById.user.id}`}>
              <Text fontWeight={"bold"}>{data.postById.user.name}</Text>
            </Link>
            <Text color={"gray.500"}>
              {moment(Number(data.postById.createdAt)).fromNow()}
            </Text>
          </Box>
        </Box>
        {!editMode ? (
          <Box mt={4}>
            <MDEditor.Markdown source={data.postById.content} />
          </Box>
        ) : (
          <>
            <MarkdownEditor value={value} setValue={setValue} />
            <Button onClick={editPost}>Submit</Button>
          </>
        )}
        <Box
          my={5}
          experimental_spaceX={3}
          style={{ display: "flex", alignItems: "center" }}
        >
          {isLiked ? (
            <TiHeart
              onClick={likeOrDislikePost}
              size={40}
              fill="red"
              color="red"
            />
          ) : (
            <TiHeartOutline onClick={likeOrDislikePost} size={40} />
          )}
          <Text style={{ fontWeight: "bold" }}>{totalLikes} likes</Text>
        </Box>
        <CommentBox postId={id} refetch={refetch} />
        {data.postById.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} postId={id} />
        ))}
      </Box>
    </Layout>
  );
};

export default Post;
