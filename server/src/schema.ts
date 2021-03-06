import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    hello: String!
    me: User
    posts(skip: Int!): [Post!]!
    profile(userId: ID!): Profile
    postById(id: String!): Post!
    postsByCategory(category: String!, skip: Int!): [Post!]!
    postsBySearch(search: String!): [Post!]!
  }

  type Mutation {
    postCreate(post: PostInput!): PostPayload!
    postUpdate(postId: ID!, post: PostInput!): PostPayload!
    postDelete(postId: ID!): PostPayload!
    postPublish(postId: ID!): PostPayload!
    postUnpublish(postId: ID!): PostPayload!
    likeOrDislike(postId: ID!): PostPayload!
    signup(
      credentials: AuthInput!
      name: String!
      regNo: String!
      bio: String!
    ): AuthPayload!
    signin(credentials: AuthInput!): AuthPayload!
    commentCreate(comment: CommentInput!): CommentPayload!
    commentUpdate(commentId: ID!, comment: CommentInput!): CommentPayload!
    commentDelete(commentId: ID!): CommentPayload!
    updateUser(userId: ID!, profileInfo: ProfileInput!): ProfilePayload!
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
    posts: [Post]
    profile: Profile!
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
    user: User!
  }

  type UserError {
    message: String!
  }

  type PostPayload {
    userErrors: [UserError!]!
    post: Post
  }

  input PostInput {
    title: String!
    content: String!
    category: String!
  }

  input AuthInput {
    email: String!
    password: String!
  }

  input CommentInput {
    content: String!
    postId: ID!
  }

  input ProfileInput {
    regNo: String
    bio: String
    avatarUrl: String
    branch: String
    year: String
  }

  type AuthPayload {
    userErrors: [UserError!]!
    token: String
  }

  type CommentPayload {
    userErrors: [UserError!]!
    comment: Comment
  }

  type ProfilePayload {
    userErrors: [UserError!]!
    profile: Profile
  }
`;
