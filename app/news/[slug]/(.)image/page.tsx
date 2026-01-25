import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/lib/mockData/mockNews";
import Image from "next/image";
import { News } from "@/app/news/types";
import { Separator } from "@radix-ui/react-separator";

const NewsImagePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  const news = DUMMY_NEWS.find((news:News) => news.slug === slug);

  if (!news) {
    return notFound();
  }

  return (
   <div className='flex flex-col items-center w-full h-full py-8'>
        <h1 className="text-2xl font-bold">{news.title} (Intercepted Route)</h1>
        <Separator className="w-full my-8 bg-gray-200 h-0.5" orientation="horizontal" />
        <Image src={`/images/${news.image}`} alt={news.title} width={500} height={500} className="object-cover" />
   </div>
  )
}

export default NewsImagePage;