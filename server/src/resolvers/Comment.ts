import { userLoader } from "../loaders/userLoader";

interface CommentParent {
  authorId: number;
}

export const Comment = {
  user: async (parent: CommentParent) => {
    return userLoader.load(parent.authorId);
  },
};
