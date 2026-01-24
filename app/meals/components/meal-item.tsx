import Image from "next/image"
import Link from "next/link"
import { Meal } from "@/lib/types/shared-types"

const MealItem = ({ meal }: { meal: Meal }) => {
  return (
    <article className="flex flex-col justify-between h-full rounded overflow-hidden shadow-[0_0_12px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out text-[#ddd6cb] bg-[linear-gradient(90deg,#2c1e19,#25200f)]">
      <header>
        <div className="relative h-60">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="pt-2 px-4">
          <h2 className="m-0 text-2xl font-[Montserrat,sans-serif]">
            {meal.title}
          </h2>
          <p className="m-0 text-xs text-[#cfa69b] italic">
            by {meal.creator}
          </p>
        </div>
      </header>
      <div className="flex flex-1 min-h-0 flex-col justify-between">
        <p className="m-0 pt-4 px-4">{meal.summary}</p>
        <div className="p-4 text-right">
          <Link
            href={`/meals/${meal.slug}`}
            className="mt-4 inline-block rounded-lg bg-[linear-gradient(90deg,#f9572a,#ff9b05)] px-4 py-2 font-bold text-white no-underline hover:bg-[linear-gradient(90deg,#fd4715,#f9b241)] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)] active:bg-[linear-gradient(90deg,#fd4715,#f9b241)] active:shadow-[0_0_12px_rgba(242,100,18,0.8)]"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}

export default MealItem
