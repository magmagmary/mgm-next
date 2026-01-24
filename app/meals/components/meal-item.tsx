import Image from "next/image"
import Link from "next/link"
import { Meal } from "@/lib/types/shared-types"
import { Button } from "@/app/components/ui/button"

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
        <Button className="w-fit ms-auto mb-4 me-4" size={'sm'}>
          <Link
            href={`/meals/${meal.slug}`}
          >
            View Details
          </Link>
        </Button>
      </div>
    </article>
  )
}

export default MealItem
