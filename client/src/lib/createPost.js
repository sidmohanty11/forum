import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation CreatePost(($post: PostInput!)){
    postCreate(
      post: $post
    ) {
      userErrors {
        message
      }
      post {
        title
      }
    }
  }
`;
