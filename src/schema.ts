import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    hello: String!
  }

  type Mutation {
    postCreate(
      title: String!
      content: String!
      category: String!
    ): PostPayload!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    category: String!
    likes: [String]
    comments: [Comment]
    published: Boolean!
    createdAt: String!
    updatedAt: String
    user: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    profile: Profile
    posts: [Post]
  }

  type Profile {
    id: ID!
    bio: String!
    regNo: String!
    avatarUrl: String
    branch: String
    year: String
    user: User!
    createdAt: String!
    updatedAt: String!
  }

  type Comment {
    id: ID!
    content: String!
    createdAt: String!
    updatedAt: String!
    post: Post!
  }

  type UserError {
    message: String!
  }

  type PostPayload {
    userErrors: [UserError!]!
    post: Post
  }
`;
