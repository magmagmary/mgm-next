import { DUMMY_NEWS } from "@/lib/mockData/mockNews";
import { Separator } from "@radix-ui/react-separator";
import NewsList from "@/components/shared/news-list";

const NewsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">News page</h1>

      <Separator className="w-full my-4 bg-gray-200 h-0.5" orientation="horizontal" />

    <NewsList news={DUMMY_NEWS} />
    </div>
  );
};

export default NewsPage;