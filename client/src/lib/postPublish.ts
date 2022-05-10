import { gql } from "@apollo/client";

export const POST_PUBLISH = gql`
  mutation PostPublish($postId: ID!) {
    postPublish(postId: $postId) {
      userErrors {
        message
      }
      post {
        published
      }
    }
  }
`;
