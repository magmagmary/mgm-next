import Link from "next/link";

const NewsNotFound = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full">
      <h1 className="text-4xl font-bold">News not found</h1>

      <Link href="/news" className="text-red-600 font-bold hover:text-red-800">Go to news page</Link>
    </div>
  )
}

export default NewsNotFound