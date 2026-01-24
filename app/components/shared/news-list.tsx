import { News } from "@/app/news/types"
import Link from "next/link"
import Image from "next/image"

const NewsList = ({ news }: { news: News[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
    {news.map((news) => (
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
  )
}

export default NewsList