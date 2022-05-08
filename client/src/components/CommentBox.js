import { Box, Text, Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import { CREATE_COMMENT } from "../lib/createComment";
import { useMutation } from "@apollo/client";
import { UserContext } from "../context/UserContext";

const CommentBox = ({ postId, refetch }) => {
  const { userId, tokenIsPresent } = useContext(UserContext);
  const isUserPresent = userId && tokenIsPresent;
  const [value, setValue] = useState("");
  const [createComment] = useMutation(CREATE_COMMENT);

  function addComment() {
    if (value === "") {
      return;
    }

    createComment({
      variables: { comment: { content: value, postId } },
    });

    refetch();
  }
  return (
    <Box>
      {isUserPresent ? (
        <>
          <Text>Add comment:</Text>
          <MarkdownEditor value={value} setValue={setValue} />
          <Button onClick={addComment}>Submit</Button>
        </>
      ) : (
        <Text>Login to Comment</Text>
      )}
    </Box>
  );
};

export default CommentBox;
