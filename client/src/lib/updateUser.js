import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation UpdateUser($userId: ID!, $profileInfo: ProfileInput!) {
    updateUser(userId: $userId, profileInfo: $profileInfo) {
      userErrors {
        message
      }
      profile {
        id
      }
    }
  }
`;
