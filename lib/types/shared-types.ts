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
    isLiked: number; 
  }

  export const NewPostSchema = z.object({
    imageUrl: z.string().min(1, 'Image URL is required'),
    title: z.string().min(1, 'Title is required'),
    content: z.string().min(1, 'Content is required') ,
    userId: z.number(),
  });

  export type NewPost = z.infer<typeof NewPostSchema>;