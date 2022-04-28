import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  {
    posts {
      id
      title
      category
      user {
        name
      }
      createdAt
      likes
    }
  }
`;