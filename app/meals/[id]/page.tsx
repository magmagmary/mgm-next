import { redirect } from 'next/navigation'

const MealsDetailPage = async ({params}: {params: Promise<{id: string}>}) => {
  const { id } = await params

  if (!id) {
    return redirect("/meals")
  }

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold ">Meals Detail Page {id}</h1>
    </main>
  )
}

export default MealsDetailPage