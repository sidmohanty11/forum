import React from "react";
import { Stack, Text, Avatar } from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";

export default function Comment() {
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Avatar />
        <Text fontWeight="semibold">Username</Text>
      </Stack>
      <Stack>
        <MDEditor.Markdown
          style={{ backgroundColor: "#fefefe", color: "black" }}
          source="
## Features

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.
"
        />
        <Text>date: 12/12/12</Text>
      </Stack>
    </Stack>
  );
}
