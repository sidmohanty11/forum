import { Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";

const CommentBox = () => {
  const [value, setValue] = useState("");
  return (
    <Box>
      <Text>Add comment:</Text>
      <MarkdownEditor value={value} setValue={setValue} />
      <Button>Submit</Button>
    </Box>
  );
};

export default CommentBox;
