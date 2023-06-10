import React, { useState } from 'react';
import { useMealsListContext } from '../providers/MealsProvider';



const MealForm = () => {
    const { addMeal } = useMealsListContext();
    // Define state variables for the form inputs
    const [newMeal, setNewMeal] = useState('');
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      addMeal(newMeal);
      setNewMeal(''); // Reset the input field
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMeal}
          onChange={(e) => setNewMeal(e.target.value)}
          placeholder="Enter a new meal"
        />
        <button type="submit">Add Meal</button>
      </form>
    );
  };
  
  export default MealForm;
  