import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { News } from "@/lib/types/shared-types";

const getNewsBySlug = async(slug: string): Promise<News> => {
  const response = await fetch(`http://localhost:8080/news/${slug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const news = await response.json();
  return news;
}

const NewsDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  const news = await getNewsBySlug(slug);

  if (!news) {
    return notFound();
  }

  return (
    <article className="flex flex-col gap-4 items-center justify-center h-full max-w-5xl mx-auto">
      <Link href={`/news/${news.slug}/image`} className="relative w-full h-100">  
        <Image src={`/images/${news.image}`} alt={news.title} fill className="object-contain" /> 
      </Link>

      <h1 className="text-4xl font-bold">{news.title}</h1>
      <time className="text-sm text-gray-500">{news.date}</time>
      <p className="text-sm text-gray-500">{news.content}</p>
    </article>
  )
}

export default NewsDetailPage;