import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Text, Avatar, Button, Box } from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";
import { useMutation } from "@apollo/client";
import { DELETE_COMMENT } from "../lib/deleteComment";
import { UPDATE_COMMENT } from "../lib/updateComment";
import { UserContext } from "../context/UserContext";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import MarkdownEditor from "./MarkdownEditor";
import moment from "moment";

export default function Comment({ comment, postId }) {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(comment.content);
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const [updateComment] = useMutation(UPDATE_COMMENT);
  const { userId } = useContext(UserContext);

  function removeComment() {
    if (!userId) {
      return;
    }

    deleteComment({
      variables: {
        commentId: comment.id,
      },
    });
  }

  function changeComment() {
    if (!userId && !value) {
      return;
    }

    updateComment({
      variables: {
        commentId: comment.id,
        comment: {
          content: value,
          postId,
        },
      },
    });

    setEditMode(false);
  }

  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Box display={"flex"} experimental_spaceX={3}>
          <Avatar />
          <Box>
            <Link to={`/users/${comment.user.id}`}>
              <Text fontWeight="bold">{comment.user.name}</Text>
            </Link>
            <Text color={"gray.500"}>
              {moment(Number(comment.createdAt)).fromNow()}
            </Text>
          </Box>
        </Box>
        {userId === comment.user.id && (
          <Box display={"flex"} experimental_spaceX={4}>
            <DeleteIcon onClick={removeComment} />
            <EditIcon onClick={() => setEditMode((prev) => !prev)} />
          </Box>
        )}
      </Stack>
      <Stack>
        {!editMode ? (
          <MDEditor.Markdown source={comment.content} />
        ) : (
          <>
            <MarkdownEditor value={value} setValue={setValue} />
            <Button onClick={changeComment}>Submit</Button>
          </>
        )}
      </Stack>
    </Stack>
  );
}
