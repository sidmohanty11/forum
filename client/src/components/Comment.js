import React, { useContext, useState } from "react";
import { Stack, Text, Avatar, Button } from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";
import { useMutation } from "@apollo/client";
import { DELETE_COMMENT } from "../lib/deleteComment";
import { UPDATE_COMMENT } from "../lib/updateComment";
import { UserContext } from "../context/UserContext";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import MarkdownEditor from "./MarkdownEditor";

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
        <Avatar />
        <Text fontWeight="semibold">{comment.user.name}</Text>
        {userId === comment.user.id && <DeleteIcon onClick={removeComment} />}
        {userId === comment.user.id && (
          <EditIcon onClick={() => setEditMode((prev) => !prev)} />
        )}
      </Stack>
      <Stack>
        {!editMode ? (
          <MDEditor.Markdown
            style={{ backgroundColor: "#fefefe", color: "black" }}
            source={comment.content}
          />
        ) : (
          <>
            <MarkdownEditor value={value} setValue={setValue} />
            <Button onClick={changeComment}>Submit</Button>
          </>
        )}
        <Text>
          date: {new Date(Number(comment.createdAt)).toLocaleString()}
        </Text>
      </Stack>
    </Stack>
  );
}
