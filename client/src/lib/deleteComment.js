import { gql } from "@apollo/client";

export const DELETE_COMMENT = gql`
  mutation DeleteComment($commentId: ID!) {
    commentDelete(commentId: $commentId) {
      userErrors {
        message
      }
      comment {
        id
        content
        createdAt
      }
    }
  }
`;
