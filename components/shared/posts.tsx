import HeartIcon from "@/app/new-post/components/heart-icon";
import type{ Post } from "@/lib/types/shared-types";
import { formatDate } from "@/lib/utils/date";
import Image from "next/image";

function Post({ post }: { post: Post }) {

  return (
    <article className="border rounded-md p-4">
      <div className="h-48 w-full relative">
        <Image src={post.image} alt={post.title} fill className="object-cover"/>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <header>
          <div>
            <h2 className="text-lg font-bold">{post.title}</h2>
          
          </div>
        </header>
        <p className="text-gray-700">{post.content}</p>
            <HeartIcon postId={post.id} isLiked={post.isLiked} />
            <p className="text-sm text-gray-500">
              Shared by {post.userFirstName} {post.userLastName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
      </div>
    </article>
  );
}

export default function Posts({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}