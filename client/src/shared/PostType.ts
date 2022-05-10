export type PostType = {
  category: "discussion" | "blog" | "question";
  createdAt: string;
  id: string;
  likes: string[];
  published: boolean;
  title: string;
  user: {
    name: string;
  };
};
