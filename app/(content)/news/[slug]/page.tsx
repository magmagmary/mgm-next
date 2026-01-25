import { notFound } from "next/navigation";
import { News } from "../types";
import { DUMMY_NEWS } from "@/lib/mockData/mockNews";
import Image from "next/image";
import Link from "next/link";

const NewsDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  const news = DUMMY_NEWS.find((news:News) => news.slug === slug);

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