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
  posts: async (__: any, _: any, { prisma }: Context) => {
    return await prisma.post.findMany({
      where: {
        published: true,
      },
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
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
  postsByCategory: async (
    _: any,
    { category }: { category: string },
    { prisma }: Context
  ) => {
    return await prisma.post.findMany({
      where: {
        published: true,
        category,
      },
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
    });
  },
  postsBySearch: async (
    _: any,
    { search }: { search: any },
    { prisma }: Context
  ) => {
    return await prisma.post.findMany({
      where: {
        published: true,
        content: {
          //@ts-ignore
          search,
        },
      },
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
    });
  },
};
