import NewsList from "@/app/components/shared/news-list";
import { getLatestNews } from "@/lib/utils/news";

const LatestNewsPage = async () => {
  const latestNews = await getLatestNews();

  return (
    <div className="flex flex-col gap-4 pt-4">
      <NewsList news={latestNews} />
    </div>
  )
}

export default LatestNewsPage
