import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query ($skip: Int!) {
    posts(skip: $skip) {
      id
      title
      category
      user {
        name
      }
      createdAt
      likes
      published
    }
  }
`;
