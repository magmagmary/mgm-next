'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import NewPostSubmitButton from "./components/new-post-submit-button";
import { useActionState } from "react";
import { createPost, NewPostState } from "@/lib/actions/new-post";
import { cn } from "@/lib/utils/utils";


export default function NewPostPage() {
  const [formState, formAction] = useActionState<NewPostState, FormData>(
    createPost,
    { failedFields: null }
  );

  const isInvalidTitle = formState.failedFields?.includes('title');
  const isInvalidContent = formState.failedFields?.includes('content');

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Create a new post</h1>
        <form className="space-y-6" action={formAction}>
          <div className="space-y-2">
            <Label htmlFor="title" className={cn(isInvalidTitle ? 'text-red-500' : '')}>Title</Label>
            <Input type="text" id="title" name="title" aria-invalid={isInvalidTitle ? 'true' : 'false'} />
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
            <Label htmlFor="content" className={cn(isInvalidContent ? 'text-red-500' : '')}>Content</Label>
            <Textarea id="content" name="content" rows={10} aria-invalid={isInvalidContent ? 'true' : 'false'} />
          </div>
          
          <div className="flex gap-3 justify-end">
            <Button type="reset" variant="outline" >
              Reset
            </Button>
            <NewPostSubmitButton />
          </div>    
        </form>
      </div>
    </div>
  );
}