import { postResolvers } from "./mutations/post";
import { authResolvers } from "./mutations/auth";
import { commentResolvers } from "./mutations/comment";

export const Mutation = {
  ...postResolvers,
  ...authResolvers,
  ...commentResolvers,
};
