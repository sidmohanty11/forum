import { Context } from "../../types";

type UserUpdateArgs = {
  userId: string;
  profileInfo: {
    regNo: string;
    bio: string;
    avatarUrl: string;
    branch: string;
    year: string;
  };
};

export const userResolvers = {
  updateUser: async (
    _: any,
    { profileInfo, userId }: UserUpdateArgs,
    { prisma, userInfo }: Context
  ) => {
    if (!userInfo) {
      return {
        userErrors: [
          {
            message: "You must be logged in to post something",
          },
        ],
        profile: null,
      };
    }

    if (userInfo.userId !== Number(userId)) {
      return {
        userErrors: [
          {
            message: "You are not authorized",
          },
        ],
        profile: null,
      };
    }

    const profile = await prisma.profile.update({
      data: {
        ...profileInfo,
      },
      where: {
        userId: Number(userId),
      },
    });

    return {
      userErrors: [],
      profile,
    };
  },
};
