import { Post } from "@prisma/client";
import { Context } from "../../types";
import { canUserMutatePost } from "../../utils/canUserMutatePost";

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
    { prisma, userInfo }: Context
  ): Promise<PostPayload> => {
    if (!userInfo) {
      return {
        userErrors: [
          {
            message: "You must be logged in to post something",
          },
        ],
        post: null,
      };
    }

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
        authorId: userInfo.userId,
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
    { prisma, userInfo }: Context
  ): Promise<PostPayload> => {
    if (!userInfo) {
      return {
        userErrors: [
          {
            message: "You must be logged in to post something",
          },
        ],
        post: null,
      };
    }

    const error = await canUserMutatePost({
      userId: userInfo.userId,
      postId: Number(postId),
      prisma,
    });

    if (error) {
      return error;
    }

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
    { prisma, userInfo }: Context
  ): Promise<PostPayload> => {
    if (!userInfo) {
      return {
        userErrors: [
          {
            message: "You must be logged in to post something",
          },
        ],
        post: null,
      };
    }

    const error = await canUserMutatePost({
      userId: userInfo.userId,
      postId: Number(postId),
      prisma,
    });

    if (error) {
      return error;
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

    await prisma.post.delete({ where: { id: Number(postId) } });

    return {
      userErrors: [],
      post: existingPost,
    };
  },
  postPublish: async (
    _: any,
    { postId }: { postId: string },
    { prisma, userInfo }: Context
  ): Promise<PostPayload> => {
    if (!userInfo) {
      return {
        userErrors: [
          {
            message: "You must be logged in to post something",
          },
        ],
        post: null,
      };
    }

    const error = await canUserMutatePost({
      userId: userInfo.userId,
      postId: Number(postId),
      prisma,
    });

    if (error) {
      return error;
    }

    return {
      userErrors: [],
      post: await prisma.post.update({
        where: {
          id: Number(postId),
        },
        data: {
          published: true,
        },
      }),
    };
  },
  postUnpublish: async (
    _: any,
    { postId }: { postId: string },
    { prisma, userInfo }: Context
  ): Promise<PostPayload> => {
    if (!userInfo) {
      return {
        userErrors: [
          {
            message: "You must be logged in to post something",
          },
        ],
        post: null,
      };
    }

    const error = await canUserMutatePost({
      userId: userInfo.userId,
      postId: Number(postId),
      prisma,
    });

    if (error) {
      return error;
    }

    return {
      userErrors: [],
      post: await prisma.post.update({
        where: {
          id: Number(postId),
        },
        data: {
          published: false,
        },
      }),
    };
  },
  likeOrDislike: async (
    _: any,
    { postId }: { postId: string },
    { prisma, userInfo }: Context
  ): Promise<PostPayload> => {
    if (!userInfo) {
      return {
        userErrors: [
          {
            message: "You must be logged in to post something",
          },
        ],
        post: null,
      };
    }

    const thePost = await prisma.post.findUnique({
      where: { id: Number(postId) },
    });

    if (!thePost) {
      return {
        userErrors: [
          {
            message: "Post doesn't exist",
          },
        ],
        post: null,
      };
    }

    const liked = thePost.likes.find((id) => id === String(userInfo.userId));

    if (liked) {
      const otherLikes = thePost.likes.filter((id: string) => id !== liked);
      thePost.likes = otherLikes;
    } else {
      thePost.likes.push(String(userInfo.userId));
    }

    return {
      userErrors: [],
      post: await prisma.post.update({
        where: {
          id: Number(postId),
        },
        data: {
          likes: thePost.likes,
        },
      }),
    };
  },
};
