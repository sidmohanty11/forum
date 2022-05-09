import { Context } from "../types";

interface UserParent {
  id: number;
}

export const User = {
  posts: async (parent: UserParent, _: any, { prisma, userInfo }: Context) => {
    const isOwnAccount = parent.id === userInfo?.userId;

    if (isOwnAccount) {
      return await prisma.post.findMany({
        where: { authorId: parent.id },
        orderBy: [{ createdAt: "desc" }],
      });
    }

    return await prisma.post.findMany({
      where: { authorId: parent.id, published: true },
      orderBy: [{ createdAt: "desc" }],
    });
  },
  profile: async (
    parent: UserParent,
    _: any,
    { prisma, userInfo }: Context
  ) => {
    return await prisma.profile.findUnique({
      where: { userId: parent.id },
    });
  },
};
