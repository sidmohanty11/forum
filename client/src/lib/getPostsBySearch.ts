import { gql } from "@apollo/client";

export const GET_POSTS_BY_SEARCH = gql`
  query GetPostBySearch($search: String!) {
    postsBySearch(search: $search) {
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
