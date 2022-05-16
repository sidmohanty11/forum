import { Box, Text, Button } from "@chakra-ui/react";
import { FC, useContext, useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import { CREATE_COMMENT } from "../lib/createComment";
import { useMutation } from "@apollo/client";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

type CommentBoxProps = {
  postId: string | undefined;
  refetch: () => {};
};

const CommentBox: FC<CommentBoxProps> = ({ postId, refetch }) => {
  const { userId, tokenIsPresent } = useContext(UserContext);
  const isUserPresent = userId && tokenIsPresent;
  const [value, setValue] = useState("");
  const [createComment] = useMutation(CREATE_COMMENT);

  async function addComment() {
    if (value === "") {
      return;
    }

    await createComment({
      variables: { comment: { content: value, postId } },
    });

    setValue("");

    refetch();
  }
  return (
    <Box>
      {isUserPresent ? (
        <>
          <Text>Add comment:</Text>
          <MarkdownEditor value={value} setValue={setValue} />
          <Button mt={2} onClick={addComment}>
            Submit
          </Button>
        </>
      ) : (
        <Link to={"/login"}>
          <Text>Login to Comment</Text>
        </Link>
      )}
    </Box>
  );
};

export default CommentBox;
