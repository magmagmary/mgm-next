'use server';

import { revalidatePath } from "next/cache";
import { updatePostLikeStatus } from "../db/posts";

export const likePost = async (postId: number) => {
   await updatePostLikeStatus(postId, 2);

   revalidatePath('/feed');
}