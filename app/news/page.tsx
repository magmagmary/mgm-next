import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

const mockNews = [
  {
    id: 1,
    title: "News 1",
    description: "News 1 description",
  },
  {
    id: 2,
    title: "News 2",
    description: "News 2 description",
  },
  {
    id: 3,
    title: "News 3",
    description: "News 3 description",
  },
]

const NewsPage = () => {

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold">News page</h1>

      <Separator className="w-full my-4 bg-gray-200 h-0.5" orientation="horizontal" />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
      {mockNews.map((news) => (
        <Link key={news.id} href={`/news/${news.id}`} className="flex flex-col gap-2 border border-gray-200 p-4 rounded-md">
          <h2>{news.title}</h2>
          <p>{news.description}</p>
        </Link>
      ))}
    </div>
    </div>
  )
}

export default NewsPage;