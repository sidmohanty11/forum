import { Comment } from "@prisma/client";
import { Context } from "../../types";
import { canUserMutateComment } from "../../utils/canUserMutateComment";

type CommentCreateArgs = {
  comment: {
    content: string;
    postId: string;
  };
};

type CommentUpdateArgs = {
  commentId: string;
  comment: CommentCreateArgs["comment"];
};

interface CommentPayload {
  userErrors: {
    message: string;
  }[];
  comment: null | Comment;
}

export const commentResolvers = {
  commentCreate: async (
    _: any,
    { comment: { content, postId } }: CommentCreateArgs,
    { prisma, userInfo }: Context
  ): Promise<CommentPayload> => {
    if (!userInfo) {
      return {
        userErrors: [
          {
            message: "You must be logged in to post something",
          },
        ],
        comment: null,
      };
    }
    if (!content.trim()) {
      return {
        userErrors: [
          {
            message: "You must provide content of the comment!",
          },
        ],
        comment: null,
      };
    }

    const post = await prisma.post.findUnique({
      where: {
        id: Number(postId),
      },
    });

    if (!post) {
      return {
        userErrors: [
          {
            message: "Post doesn't exist!",
          },
        ],
        comment: null,
      };
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        authorId: userInfo.userId,
        postId: Number(postId),
      },
    });

    return {
      userErrors: [],
      comment,
    };
  },
  commentUpdate: async (
    _: any,
    { commentId, comment: { content, postId } }: CommentUpdateArgs,
    { prisma, userInfo }: Context
  ): Promise<CommentPayload> => {
    if (!userInfo) {
      return {
        userErrors: [
          {
            message: "You must be logged in to post something",
          },
        ],
        comment: null,
      };
    }

    const error = await canUserMutateComment({
      userId: userInfo.userId,
      commentId: Number(commentId),
      prisma,
    });

    if (error) {
      return error;
    }

    if (!content.trim()) {
      return {
        userErrors: [
          {
            message:
              "You must provide title, content, and category of the post!",
          },
        ],
        comment: null,
      };
    }

    const existingComment = await prisma.comment.findUnique({
      where: { id: Number(commentId) },
    });

    if (!existingComment) {
      return {
        userErrors: [
          {
            message: "Comment doesn't exist!",
          },
        ],
        comment: null,
      };
    }

    const comment = await prisma.comment.update({
      data: {
        content,
      },
      where: {
        id: Number(commentId),
      },
    });

    return {
      userErrors: [],
      comment,
    };
  },
  commentDelete: async (
    _: any,
    { commentId }: { commentId: string },
    { prisma, userInfo }: Context
  ): Promise<CommentPayload> => {
    if (!userInfo) {
      return {
        userErrors: [
          {
            message: "You must be logged in to post something",
          },
        ],
        comment: null,
      };
    }

    const error = await canUserMutateComment({
      userId: userInfo.userId,
      commentId: Number(commentId),
      prisma,
    });

    if (error) {
      return error;
    }

    const existingComment = await prisma.comment.findUnique({
      where: { id: Number(commentId) },
    });

    if (!existingComment) {
      return {
        userErrors: [
          {
            message: "Comment doesn't exist!",
          },
        ],
        comment: null,
      };
    }

    await prisma.comment.delete({ where: { id: Number(commentId) } });

    return {
      userErrors: [],
      comment: existingComment,
    };
  },
};
