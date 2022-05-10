import { Profile } from "@prisma/client";
import DataLoader from "dataloader";
import { prisma } from "..";

type BatchUser = (ids: number[]) => Promise<Profile[]>;

const batchProfiles: BatchUser = async (ids) => {
  const profiles = await prisma.profile.findMany({
    where: {
      userId: {
        in: ids,
      },
    },
  });

  const profileMap: { [key: string]: Profile } = {};

  profiles.forEach((user) => {
    profileMap[user.id] = user;
  });

  return ids.map((id) => profileMap[id]);
};

// @ts-ignore
export const profileLoader = new DataLoader<number, Profile>(batchProfiles);
