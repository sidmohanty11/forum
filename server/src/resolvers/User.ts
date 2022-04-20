import { Context } from "../types";

interface UserParent {
  id: number;
}

export const User = {
  posts: async (
    parent: UserParent,
    { skip, take }: { skip: number; take: number },
    { prisma, userInfo }: Context
  ) => {
    const isOwnAccount = parent.id === userInfo?.userId;

    if (isOwnAccount) {
      return await prisma.post.findMany({
        where: { id: parent.id },
        orderBy: [{ createdAt: "desc" }],
        skip,
        take,
      });
    }

    return await prisma.post.findMany({
      where: { id: parent.id, published: true },
      orderBy: [{ createdAt: "desc" }],
      skip,
      take,
    });
  },
};
