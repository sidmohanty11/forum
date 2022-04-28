import React from "react";
import MarkdownEditor from "../components/MarkdownEditor";
import Layout from "../components/Layout";
import { Box, Button, FormLabel, Input, Select } from "@chakra-ui/react";

const NewPost = () => {
  return (
    <Layout>
      <Box>
        <FormLabel htmlFor="title">
          Title:
          <Input id="title" placeholder="Title" />
        </FormLabel>
        <FormLabel htmlFor="category">
          Category:
          <Select placeholder="Select option" id="category">
            <option value="blog">Blog</option>
            <option value="discussion">Discussion</option>
            <option value="question">Question</option>
          </Select>
        </FormLabel>
        <FormLabel htmlFor="content">
          Content:
          <MarkdownEditor />
        </FormLabel>
        <Button mx={2}>Save Draft</Button>
        <Button mx={2} variant="solid" colorScheme={"green"}>
          Publish
        </Button>
      </Box>
    </Layout>
  );
};

export default NewPost;
