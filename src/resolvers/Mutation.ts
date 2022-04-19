import { Post } from "@prisma/client";
import { Context } from "../types";

type postCreateArgs = {
  title: string;
  content: string;
  category: string;
};

interface PostPayload {
  userErrors: {
    message: string;
  }[];
  post: null | Post;
}

export const Mutation = {
  postCreate: async (
    _: any,
    { title, content, category }: postCreateArgs,
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
};
