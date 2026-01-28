export type Post = {
    id: number;
    image_url: string;
    title: string;
    content: string;
    created_at: string;
    user_id: number;
}

export interface PostRow {
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
  
  export interface StorePostInput {
    imageUrl: string;
    title: string;
    content: string;
    userId: number;
  }