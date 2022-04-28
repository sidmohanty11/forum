import React from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";
import { FiHeart } from "react-icons/fi";
import Layout from "../components/Layout";
import Comment from "../components/Comment";

const colourSelectionForCategories = {
  discussion: "red.500",
  blog: "blue.500",
  question: "pink.500",
};

const Post = () => {
  return (
    <Layout>
      <Center>
        <Box maxW={"70vw"} border="1px solid #eee" borderRadius="md">
          <Text
            style={{ fontWeight: "bold" }}
            fontSize="lg"
            textAlign={"center"}
            p={4}
            bgColor={colourSelectionForCategories["question"]}
          >
            BLOG
          </Text>
          <Heading mt={4} textAlign={"center"}>
            Title of blog
          </Heading>
          <Text textAlign={"right"}> - by Sidharth Mohanty</Text>
          <Text textAlign={"right"}> - Date: 12/12/12</Text>
          <MDEditor.Markdown
            source="# Dillinger
          ## _The Last Markdown Editor, Ever_
          
          [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
          
          [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
          
          Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
          AngularJS-powered HTML5 Markdown editor.
          
          - Type some Markdown on the left
          - See HTML in the right
          - ✨Magic ✨
          
          ## Features
          
          - Import a HTML file and watch it magically convert to Markdown
          - Drag and drop images (requires your Dropbox account be linked)
          - Import and save files from GitHub, Dropbox, Google Drive and One Drive
          - Drag and drop markdown and HTML files into Dillinger
          - Export documents as Markdown, HTML and PDF
          
          Markdown is a lightweight markup language based on the formatting conventions
          that people naturally use in email.
          As [John Gruber] writes on the [Markdown site][df1]
          
          > The overriding design goal for Markdown's
          > formatting syntax is to make it as readable
          > as possible. The idea is that a
          > Markdown-formatted document should be
          > publishable as-is, as plain text, without
          > looking like it's been marked up with tags
          > or formatting instructions.
          
          This text you see here is *actually- written in Markdown! To get a feel
          for Markdown's syntax, type some text into the left window and
          watch the results in the right.
          "
            style={{ backgroundColor: "#fefefe", color: "black" }}
          />
          <Box
            p={5}
            experimental_spaceX={3}
            style={{ display: "flex", alignItems: "center" }}
          >
            <FiHeart size={40} fill="red" color="red" />
            <Text style={{ fontWeight: "bold" }}>10 likes</Text>
          </Box>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </Box>
      </Center>
    </Layout>
  );
};

export default Post;
