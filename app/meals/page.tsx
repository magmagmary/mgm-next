import Link from "next/link"
import MealsGrid from "./components/meals-grid"
import { getMeals } from "@/lib/service/meals";
import { Suspense } from "react";
import { Button } from "../components/ui/button";
import { Metadata } from "next";



const Meals = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />
}

const MealsPage = async () => {
  return (
    <>
      <header className="flex flex-col gap-12 mt-12 mb-20 mx-auto w-[90%] max-w-300 text-foreground text-2xl">
        <h1 className="font-[Montserrat,sans-serif]">
          Delicious Meals, create{" "}
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p className="m-0">Choose your favorite meal and cook it yourself!</p>

        <Button className="w-fit">
          <Link
            href="/meals/share"
          >
            Share Your Favorite Recipe
          </Link>
        </Button>
      </header>
      <main className="w-[90%] max-w-300 mx-auto mb-4 text-amber-800">
        <Suspense fallback={<p className="text-center text-2xl font-bold">Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
   </>
  )
}

export default MealsPage