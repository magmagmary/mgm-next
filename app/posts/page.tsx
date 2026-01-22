import Link from "next/link"
import Divider from "@/components/shared/divider"

const PostsPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold ">Posts Page</h1>

      <Divider className="w-64!"/>

      <ul className="flex flex-col gap-2">
        <li className="cursor-pointer"><Link href="/posts/1"> Post 1</Link></li>
        <li className="cursor-pointer"><Link href="/posts/2"> Post 2</Link></li>
        <li className="cursor-pointer"><Link href="/posts/3"> Post 3</Link></li>
      </ul>
    </main>
  )
}

export default PostsPage    