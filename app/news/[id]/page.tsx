import { notFound } from "next/navigation";

const NewsDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  if (!id) {
    return notFound();
  }

  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-4xl font-bold">News {id} detail page</h1>
    </div>
  )
}

export default NewsDetailPage;