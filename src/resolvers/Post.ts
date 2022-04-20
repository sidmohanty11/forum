import { Context } from "../types";

interface PostParent {
  authorId: number;
}

export const Post = {
  user: async (parent: PostParent, __: any, { prisma }: Context) => {
    return await prisma.user.findUnique({ where: { id: parent.authorId } });
  },
};
