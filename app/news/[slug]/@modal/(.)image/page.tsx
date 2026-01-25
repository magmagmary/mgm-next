
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/lib/mockData/mockNews";
import Image from "next/image";
import { News } from "@/app/news/types";
import { Dialog, DialogHeader, DialogContent ,DialogTitle ,DialogDescription} from "@/components/ui/dialog";

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
    <Dialog open >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{news.title}</DialogTitle>
          <DialogDescription>
          <Image src={`/images/${news.image}`} alt={news.title} width={500} height={500} className="object-cover my-5" />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  
  )
}

export default NewsImagePage;