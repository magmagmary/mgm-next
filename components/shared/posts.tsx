import type{ Post } from "@/lib/types/shared-types";
import { formatDate } from "@/lib/utils/date";
import { Heart } from "lucide-react";
import Image from "next/image";

function Post({ post }: { post: Post }) {
  return (
    <article className="post">
      <div className="post-image">
        <Image src={post.image_url} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.user_id} on{' '}
              <time dateTime={post.created_at}>
                {formatDate(post.created_at)}
              </time>
            </p>
          </div>
          <div>
            <Heart />
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}