export type CommentType = {
  id: string;
  content: string;
  user: {
    id: string;
    name: string;
    profile: {
      avatarUrl: string;
    };
  };
  createdAt: string;
};
