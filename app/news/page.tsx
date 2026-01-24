import { DUMMY_NEWS } from "@/lib/mockData/mockNews";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import Image from "next/image";

const NewsPage = () => {

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">News page</h1>

      <Separator className="w-full my-4 bg-gray-200 h-0.5" orientation="horizontal" />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
      {DUMMY_NEWS.map((news) => (
        <Link key={news.id} href={`/news/${news.slug}`} className="flex flex-col gap-2 border border-gray-200 rounded-md overflow-hidden">
          <div className="relative w-full h-40">
            <Image src={`/images/${news.image}`} alt={news.title} fill className="object-cover" />
          </div>
          <div className="p-4">
            <h2 className="text-md font-bold">{news.title}</h2>
            <p className="text-sm text-gray-500">{news.date}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;