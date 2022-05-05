import { gql } from "@apollo/client";

export const GET_POSTS_BY_ID = gql`
  query ($id: String!) {
    postById(id: $id) {
      title
      category
      content
      likes
      user {
        name
      }
      comments {
        user {
          name
        }
        content
        createdAt
      }
      createdAt
    }
  }
`;
