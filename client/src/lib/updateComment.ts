import { gql } from "@apollo/client";

export const UPDATE_COMMENT = gql`
  mutation UpdateComment($commentId: ID!, $comment: CommentInput!) {
    commentUpdate(commentId: $commentId, comment: $comment) {
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
