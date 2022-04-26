import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation Signup(
    $email: String!
    $password: String!
    $bio: String!
    $regNo: String!
    $name: String!
  ) {
    signup(
      credentials: { email: $email, password: $password }
      bio: $bio
      regNo: $regNo
      name: $name
    ) {
      userErrors {
        message
      }
      token
    }
  }
`;
