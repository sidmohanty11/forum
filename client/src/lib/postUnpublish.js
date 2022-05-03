import { gql } from "@apollo/client";

export const POST_ = gql`
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
