import { gql } from "@apollo/client";

export const GET_POSTS_BY_CATEGORY = gql`
  query GetPostByCategory($category: String!, $skip: Int!) {
    postsByCategory(category: $category, skip: $skip) {
      id
      title
      category
      published
      user {
        name
      }
      createdAt
      likes
    }
  }
`;
