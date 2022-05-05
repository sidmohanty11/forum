import { gql } from "@apollo/client";

export const GET_POSTS_BY_CATEGORY = gql`
  query GetPostByCategory($category: String!) {
    postsByCategory(category: $category) {
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
