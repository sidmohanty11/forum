import { userLoader } from "../loaders/userLoader";
import { Context } from "../types";

interface PostParent {
  authorId: number;
}

interface CommentParent {
  authorId: number;
  postId: number;
}

export const Post = {
  user: async (parent: PostParent) => {
    return userLoader.load(parent.authorId);
  },
  comments: async ({ postId }: CommentParent, _: any, { prisma }: Context) => {
    return await prisma.comment.findMany({
      where: { postId },
    });
  },
};
