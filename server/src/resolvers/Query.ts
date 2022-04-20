import { Context } from "../types";

export const Query = {
  hello: () => {
    return "world";
  },
  me: async (_: any, __: any, { prisma, userInfo }: Context) => {
    if (!userInfo) {
      return null;
    }
    return await prisma.user.findUnique({ where: { id: userInfo.userId } });
  },
  posts: async (
    _: any,
    { take, skip }: { take: number; skip: number },
    { prisma }: Context
  ) => {
    return await prisma.post.findMany({
      where: {
        published: true,
      },
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      skip,
      take,
    });
  },
  profile: async (
    _: any,
    { userId }: { userId: string },
    { prisma }: Context
  ) => {
    return await prisma.profile.findUnique({
      where: { userId: Number(userId) },
    });
  },
};
