import { gql } from "@apollo/client";

export const GET_POSTS_BY_ID = gql`
  query ($id: String!) {
    postById(id: $id) {
      title
      category
      content
      likes
      user {
        id
        name
      }
      comments {
        id
        user {
          id
          name
        }
        content
        createdAt
      }
      createdAt
    }
  }
`;
