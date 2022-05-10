import React, { useState } from "react";
import MarkdownEditor from "../components/MarkdownEditor";
import Layout from "../components/Layout";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { CREATE_POST } from "../lib/createPost";
import { POST_PUBLISH } from "../lib/postPublish";
import { POST_UNPUBLISH } from "../lib/postUnpublish";
import { useMutation } from "@apollo/client";
import { validateStringPresent } from "../utils/validateAuth";
import { FormikTypes } from "../shared/FormikTypes";

const NewPost = () => {
  const [content, setContent] = useState("");
  const [isDraftOrPublish, setIsDraftOrPublish] = useState("DRAFT");
  const [createPost, { loading }] = useMutation(CREATE_POST);
  const [postPublish] = useMutation(POST_PUBLISH);
  const [postUnpublish] = useMutation(POST_UNPUBLISH);
  const navigate = useNavigate();

  // TODO
  if (loading) {
    <p>Loading...</p>;
  }

  return (
    <Layout>
      <Box>
        <Formik
          initialValues={{
            title: "",
            category: "",
          }}
          onSubmit={async (values, actions) => {
            const { data } = await createPost({
              variables: {
                post: {
                  title: values.title,
                  category: values.category,
                  content,
                },
              },
            });
            if (data.postCreate.userErrors.length) {
              actions.setErrors({
                title: data.postCreate.userErrors[0].message,
                category: data.postCreate.userErrors[0].message,
              });
              return;
            }
            if (isDraftOrPublish === "PUBLISH") {
              postPublish({
                variables: {
                  postId: data.postCreate.post.id,
                },
              });
            } else {
              postUnpublish({
                variables: {
                  postId: data.postCreate.post.id,
                },
              });
            }
            navigate("/");
          }}
        >
          {(props) => (
            <Form>
              <Field name="title" validate={validateStringPresent}>
                {({ field, form }: FormikTypes) => (
                  <FormControl>
                    <FormLabel htmlFor="title">
                      Title:
                      <Input {...field} id="title" placeholder="Title" />
                    </FormLabel>
                    <Text color="red.500">{form.errors.name}</Text>
                  </FormControl>
                )}
              </Field>
              <Field name="category" validate={validateStringPresent}>
                {({ field, form }: FormikTypes) => (
                  <FormControl>
                    <FormLabel htmlFor="category">
                      Category:
                      <Select
                        {...field}
                        placeholder="Select option"
                        id="category"
                      >
                        <option value="blog">Blog</option>
                        <option value="discussion">Discussion</option>
                        <option value="question">Question</option>
                      </Select>
                    </FormLabel>
                  </FormControl>
                )}
              </Field>
              <Field name="content">
                {({ field, form }: FormikTypes) => (
                  <FormControl>
                    <FormLabel htmlFor="content">
                      Content:
                      <MarkdownEditor value={content} setValue={setContent} />
                    </FormLabel>
                  </FormControl>
                )}
              </Field>
              <Button mx={2} onClick={() => setIsDraftOrPublish("DRAFT")}>
                Save Draft
              </Button>
              <Button
                onClick={() => setIsDraftOrPublish("PUBLISH")}
                type="submit"
                mx={2}
                variant="solid"
                colorScheme={"green"}
              >
                Publish
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Layout>
  );
};

export default NewPost;
