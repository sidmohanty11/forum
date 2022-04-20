import { Context } from "../types";

interface ProfileParent {
  id: number;
  bio: string;
  userId: number;
}

export const Profile = {
  user: async (parent: ProfileParent, __: any, { prisma }: Context) => {
    return await prisma.user.findUnique({ where: { id: parent.userId } });
  },
};
