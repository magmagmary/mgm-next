
import { notFound } from "next/navigation";
import NewsModal from "../../../components/news-modal";
import { getNewsBySlug } from "@/lib/utils/news";

const NewsImagePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  const news = await getNewsBySlug(slug);

  return (
   <NewsModal news={news} />
  )
}

export default NewsImagePage;