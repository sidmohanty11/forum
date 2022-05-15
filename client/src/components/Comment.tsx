import React, { FC, useContext, useState } from "react";
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
import { CommentType } from "../shared/CommentType";

type CommentProps = {
  comment: CommentType
  postId: string | undefined
  refetch: () => void
}

const Comment: FC<CommentProps> = ({ comment, postId, refetch }) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(comment.content);
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const [updateComment] = useMutation(UPDATE_COMMENT);
  const { userId, tokenIsPresent } = useContext(UserContext);

  const userIsPresent = userId && tokenIsPresent

  async function removeComment() {
    if (!userId) {
      return;
    }

    await deleteComment({
      variables: {
        commentId: comment.id,
      },
    });

    refetch();
  }

  async function changeComment() {
    if (!userId && !value) {
      return;
    }

    await updateComment({
      variables: {
        commentId: comment.id,
        comment: {
          content: value,
          postId,
        },
      },
    });

    setEditMode(false);
    refetch();
  }

  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Box display={"flex"} experimental_spaceX={3}>
          <Avatar src={comment.user.profile.avatarUrl} />
          <Box>
            <Link to={`/users/${comment.user.id}`}>
              <Text fontWeight="bold">{comment.user.name}</Text>
            </Link>
            <Text color={"gray.500"}>
              {moment(Number(comment.createdAt)).fromNow()}
            </Text>
          </Box>
        </Box>
        {userIsPresent && userId === comment.user.id && (
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

export default Comment