import { postResolvers } from "./mutations/post";
import { authResolvers } from "./mutations/auth";
import { commentResolvers } from "./mutations/comment";
import { userResolvers } from "./mutations/user";

export const Mutation = {
  ...postResolvers,
  ...authResolvers,
  ...commentResolvers,
  ...userResolvers,
};
