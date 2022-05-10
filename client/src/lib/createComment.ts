import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation CreateComment($comment: CommentInput!) {
    commentCreate(comment: $comment) {
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
