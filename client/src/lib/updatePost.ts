import { gql } from "@apollo/client";

export const UPDATE_POST = gql`
  mutation PostUpdate($postId: ID!, $post: PostInput!) {
    postUpdate(postId: $postId, post: $post) {
      userErrors {
        message
      }
      post {
        title
      }
    }
  }
`;
