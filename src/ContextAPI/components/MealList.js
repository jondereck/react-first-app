import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {
    const { meals, removeMeal, resetMeal } = useMealsListContext();

    return (
        <div>
            <h1>Meal list using API</h1>
            {meals.map((meal, index) => (
                <h2 key={index} onClick={() => removeMeal(meal)}>
                    {meal}
                </h2>
            ))}
            <button onClick={resetMeal}>reset</button>

        </div>
    )
}

export default MealsList