import { Separator } from "@radix-ui/react-separator";
import NewsList from "@/components/shared/news-list";
import { getAllNews } from "@/lib/utils/news";

const NewsPage = async() => {
  const news = await getAllNews();

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">News page</h1>

      <Separator className="w-full my-4 bg-gray-200 h-0.5" orientation="horizontal" />

      {<NewsList news={news} />}
   
    </div>
  );
};

export default NewsPage;