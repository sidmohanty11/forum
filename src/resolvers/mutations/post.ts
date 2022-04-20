import { Post } from "@prisma/client";
import { Context } from "../../types";

type PostType = {
  title: string;
  content: string;
  category: string;
};

type postCreateArgs = {
  post: PostType;
};

type postUpdateArgs = {
  postId: string;
  post: PostType;
};

interface PostPayload {
  userErrors: {
    message: string;
  }[];
  post: null | Post;
}

export const postResolvers = {
  postCreate: async (
    _: any,
    { post: { title, content, category } }: postCreateArgs,
    { prisma }: Context
  ): Promise<PostPayload> => {
    if (!title.trim() || !content.trim() || !category.trim()) {
      return {
        userErrors: [
          {
            message:
              "You must provide title, content, and category of the post!",
          },
        ],
        post: null,
      };
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        category,
        authorId: 1,
      },
    });

    return {
      userErrors: [],
      post,
    };
  },
  postUpdate: async (
    _: any,
    { postId, post: { title, content, category } }: postUpdateArgs,
    { prisma }: Context
  ): Promise<PostPayload> => {
    if (!title.trim() || !content.trim() || !category.trim()) {
      return {
        userErrors: [
          {
            message:
              "You must provide title, content, and category of the post!",
          },
        ],
        post: null,
      };
    }

    const existingPost = await prisma.post.findUnique({
      where: { id: Number(postId) },
    });

    if (!existingPost) {
      return {
        userErrors: [
          {
            message: "Post doesn't exist!",
          },
        ],
        post: null,
      };
    }

    const post = await prisma.post.update({
      data: {
        title,
        content,
        category,
        authorId: 1,
      },
      where: {
        id: Number(postId),
      },
    });

    return {
      userErrors: [],
      post,
    };
  },
  postDelete: async (
    _: any,
    { postId }: { postId: string },
    { prisma }: Context
  ): Promise<PostPayload> => {
    const existingPost = await prisma.post.findUnique({
      where: { id: Number(postId) },
    });

    if (!existingPost) {
      return {
        userErrors: [
          {
            message: "Post doesn't exist!",
          },
        ],
        post: null,
      };
    }

    await prisma.post.delete({ where: { id: Number(postId) } });

    return {
      userErrors: [],
      post: existingPost,
    };
  },
};
