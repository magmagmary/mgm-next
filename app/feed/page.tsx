import Posts from "@/components/shared/posts";
import { Separator } from "@/components/ui/separator";
import { getPosts } from "@/lib/db/posts";

const FeedPage = async () => {
  const posts = await getPosts();

  return (
    <div className='flex flex-col items-center justify-center py-10 max-w-2xl mx-auto'>
      <h1 className='text-2xl font-bold'>All posts by all users</h1>
      <Separator className="my-8 w-full h-[1px] bg-foreground" />

      <Posts posts={posts} />
    </div>
  );
}

export default FeedPage;
