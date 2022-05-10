import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    signin(credentials: { email: $email, password: $password }) {
      userErrors {
        message
      }
      token
    }
  }
`;
