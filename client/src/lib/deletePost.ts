import { gql } from "@apollo/client";

export const DELETE_POST = gql`
  mutation DeletePost($postId: ID!) {
    postDelete(postId: $postId) {
      userErrors {
        message
      }
      post {
        title
      }
    }
  }
`;
