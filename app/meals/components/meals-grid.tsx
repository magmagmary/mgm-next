import { Meal } from "../types"
import MealItem from "./meal-item"

const MealsGrid = ({meals}: {meals: Meal[]}) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {meals.map((meal) => (
        <li key={meal.title}>
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  )
}

export default MealsGrid
