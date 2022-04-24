import { Context } from "../types";

interface CanUserMutateComment {
  userId: number;
  commentId: number;
  prisma: Context["prisma"];
}

export const canUserMutateComment = async ({
  userId,
  commentId,
  prisma,
}: CanUserMutateComment) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return {
      userErrors: [
        {
          message: "User not found",
        },
      ],
      comment: null,
    };
  }

  const comment = await prisma.comment.findUnique({ where: { id: commentId } });

  if (comment?.authorId !== user.id) {
    return {
      userErrors: [
        {
          message: "Forbidden action",
        },
      ],
      comment: null,
    };
  }
};
