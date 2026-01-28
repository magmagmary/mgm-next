'use server';

import { redirect } from "next/navigation";
import { NewPost, NewPostSchema } from "../types/shared-types";
import { storePost } from "../db/posts";

export type NewPostState = {
  failedFields: string[] | null;
}

export const createPost = async (_prevState: NewPostState, formData: FormData) => {
  const newPost: NewPost = {
    title: formData.get('title')?.toString() || '',
    content: formData.get('content')?.toString() || '',
    image: formData.get('image') as File || '',
    userId: 1,
  }

  const validatedFields = NewPostSchema.safeParse(newPost);

  if (!validatedFields.success) {

    const failedFields = validatedFields.error.issues.map((issue) => issue.path[0]) as string[];

    return { failedFields: failedFields };
  }

  await storePost(newPost);

  redirect('/feed');
}