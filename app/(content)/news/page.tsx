import { Separator } from "@radix-ui/react-separator";
import NewsList from "@/components/shared/news-list";
import { News } from "@/lib/types/shared-types";

const getNews = async(): Promise<News[]> => {
  const response = await fetch('http://localhost:8080/news');
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const news = await response.json();
  return news;
}

const NewsPage = async() => {
  const news = await getNews();

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">News page</h1>

      <Separator className="w-full my-4 bg-gray-200 h-0.5" orientation="horizontal" />

      {<NewsList news={news} />}
   
    </div>
  );
};

export default NewsPage;