import { postResolvers } from "./mutations/post";
import { authResolvers } from "./mutations/auth";

export const Mutation = {
  ...postResolvers,
  ...authResolvers,
};
