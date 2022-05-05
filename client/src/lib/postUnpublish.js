import { gql } from "@apollo/client";

export const POST_UNPUBLISH = gql`
  mutation PostUnpublish($postId: ID!) {
    postUnpublish(postId: $postId) {
      userErrors {
        message
      }
      post {
        published
      }
    }
  }
`;
