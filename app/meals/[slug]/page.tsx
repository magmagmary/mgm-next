import { redirect } from 'next/navigation'

const MealsDetailPage = async ({params}: {params: Promise<{slug: string}>}) => {
  const { slug } = await params

  if (!slug) {
    return redirect("/meals")
  }

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold ">Meals Detail Page {slug}</h1>
    </main>
  )
}

export default MealsDetailPage