import { Context } from "../types";
import { userLoader } from "../loaders/userLoader";

interface PostParent {
  authorId: number;
}

export const Post = {
  user: async (parent: PostParent) => {
    return userLoader.load(parent.authorId);
  },
};
