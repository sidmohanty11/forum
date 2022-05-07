import { Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import { CREATE_COMMENT } from "../lib/createComment";
import { useMutation } from "@apollo/client";

const CommentBox = ({ postId }) => {
  const [value, setValue] = useState("");
  const [createComment] = useMutation(CREATE_COMMENT);

  function addComment() {
    if (value === "") {
      return;
    }

    createComment({
      variables: { comment: { content: value, postId } },
    });
  }
  return (
    <Box>
      <Text>Add comment:</Text>
      <MarkdownEditor value={value} setValue={setValue} />
      <Button onClick={addComment}>Submit</Button>
    </Box>
  );
};

export default CommentBox;
