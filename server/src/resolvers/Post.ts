import { userLoader } from "../loaders/userLoader";
import { Context } from "../types";

interface PostParent {
  authorId: number;
}

interface CommentParent {
  authorId: number;
  id: number;
}

export const Post = {
  user: async (parent: PostParent) => {
    return userLoader.load(parent.authorId);
  },
  comments: async ({ id }: CommentParent, _: any, { prisma }: Context) => {
    return await prisma.comment.findMany({
      where: {
        postId: Number(id),
      },
    });
  },
};
