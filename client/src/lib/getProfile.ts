import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query GetProfile($userId: ID!) {
    profile(userId: $userId) {
      id
      user {
        name
        posts {
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
      avatarUrl
      createdAt
      branch
      regNo
      bio
      year
    }
  }
`;
