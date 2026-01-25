
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/lib/mockData/mockNews";
import { News } from "@/lib/types/shared-types";
import NewsModal from "../../../components/news-modal";

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
   <NewsModal news={news} />
  )
}

export default NewsImagePage;