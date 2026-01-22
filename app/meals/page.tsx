import Link from "next/link"
import Divider from "@/components/shared/divider"

const MealsPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold ">Meals Page</h1>

      <Divider className="w-64!"/>

      <ul className="flex flex-col gap-2">
        <li className="cursor-pointer"><Link href="/meals/1"> Meal 1</Link></li>
        <li className="cursor-pointer"><Link href="/meals/2"> Meal 2</Link></li>
        <li className="cursor-pointer"><Link href="/meals/3"> Meal 3</Link></li>
      </ul>
    </main>
  )
}

export default MealsPage