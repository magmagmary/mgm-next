import { redirect } from "next/navigation"

export default async function PostPage({params}: {params: Promise<{id: string}>}) {
    const { id } = await params

    if (!id) {
       return redirect("/posts")
    }

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold ">Post Page {id}</h1>
    </main>
  )
}

