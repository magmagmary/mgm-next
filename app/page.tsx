import Posts from "@/components/shared/posts";
import { Separator } from "@/components/ui/separator";
import { Post } from "@/lib/types/shared-types";


const mockPost:Post = {
  id: 1,
  image: 'https://picsum.photos/200/300',
  title: 'Mock Post',
  content: 'This is a mock post',
  createdAt: new Date().toISOString(),
  userFirstName: 'John',
  userLastName: 'Doe',
  likes: 0,
  isLiked: false,
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold">Home</h1>

      <Separator className="my-8 w-full h-[1px] bg-foreground" />

      <Posts posts={[mockPost]} />
    </div>
  );
}
