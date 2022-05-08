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
  posts: async (__: any, { skip = 0 }: any, { prisma }: Context) => {
    return await prisma.post.findMany({
      where: {
        published: true,
      },
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      take: 10,
      skip,
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
  postById: async (_: any, { id }: { id: string }, { prisma }: Context) => {
    return await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });
  },
  postsByCategory: async (
    _: any,
    { category, skip = 0 }: { category: string; skip: number },
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
      take: 10,
      skip,
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
