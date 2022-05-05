import React from "react";
import { Stack, Text, Avatar } from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";

export default function Comment({ comment }) {
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Avatar />
        <Text fontWeight="semibold">{comment.user.name}</Text>
      </Stack>
      <Stack>
        <MDEditor.Markdown
          style={{ backgroundColor: "#fefefe", color: "black" }}
          source={comment.content}
        />
        <Text>
          date: {new Date(Number(comment.createdAt)).toLocaleString()}
        </Text>
      </Stack>
    </Stack>
  );
}
