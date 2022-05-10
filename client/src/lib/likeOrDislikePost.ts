import { gql } from "@apollo/client";

export const LIKE_OR_DISLIKE_POST = gql`
  mutation LikeOrDislike($postId: ID!) {
    likeOrDislike(postId: $postId) {
      userErrors {
        message
      }
      post {
        likes
      }
    }
  }
`;
