import { z } from "zod";

export interface Post {
    id: number;
    image: string;
    title: string;
    content: string;
    createdAt: string;
    userFirstName: string;
    userLastName: string;
    likes: number;
    isLiked: boolean; 
  }

  export const NewPostSchema = z.object({
    image: z.instanceof(File),
    title: z.string().min(1, 'Title is required'),
    content: z.string().min(1, 'Content is required') ,
    userId: z.number(),
  });

  export type NewPost = z.infer<typeof NewPostSchema>;