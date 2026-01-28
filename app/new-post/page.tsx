import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { storePost } from "@/lib/db/posts";
import { NewPost } from "@/lib/types/shared-types";
import NewPostSubmitButton from "./components/new-post-submit-button";

export default function NewPostPage() {
  const createPost = async (formData: FormData) => {
    'use server';

    const newPost: NewPost = {
      title: formData.get('title')?.toString() || '',
      content: formData.get('content')?.toString() || '',
      imageUrl: formData.get('image')?.toString() || '',
      userId: 1,
    }

    await storePost(newPost);
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Create a new post</h1>
        <form className="space-y-6" action={createPost}>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" name="title" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp"
              id="image"
              name="image"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" rows={10} required />
          </div>
          
          <div className="flex gap-3 justify-end">
            <Button type="reset" variant="outline">
              Reset
            </Button>
            <NewPostSubmitButton />
          </div>    
        </form>
      </div>
    </div>
  );
}