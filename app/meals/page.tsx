import Link from "next/link"

const MealsPage = () => {
  return (
    <>
      <header className="flex flex-col gap-12 mt-12 mb-20 mx-auto w-[90%] max-w-300 text-foreground text-2xl">
        <h1 className="font-[Montserrat,sans-serif]">
          Delicious Meals, create{" "}
          <span className="bg-linear-to-r from-primary to-destructive bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p className="m-0">Choose your favorite meal and cook it yourself!</p>

        <p className="m-0">
          <Link
            href="/meals/share"
            className="inline-block mt-4 py-2 px-4 rounded-lg bg-linear-to-r from-primary to-destructive text-white font-bold no-underline"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main></main>
   </>
  )
}

export default MealsPage