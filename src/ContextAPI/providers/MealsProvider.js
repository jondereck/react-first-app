import React from "react";

const MealsContext = React.createContext();

const todaysMeals = ["Chicken", "Spaghetti", "Palabok"];


  

const MealsProvider = ({children}) => {
    const [meals, setMealsList] = React.useState(todaysMeals);
    const removeMeal = (mealToRemove) => {
        setMealsList((prevMeals) =>
          prevMeals.filter((meal) => meal !== mealToRemove)
        );
      };

    const resetMeal = () => {
        setMealsList(todaysMeals)
    }

    const addMeal = (newMeal) => {
        setMealsList((prevMeals) => [...prevMeals, newMeal])
    }
      
    return (
        <MealsContext.Provider value={{meals, removeMeal, resetMeal, addMeal}}>
            {children}
        </MealsContext.Provider>
    )
}


export const useMealsListContext = () => React.useContext(MealsContext);
export default MealsProvider