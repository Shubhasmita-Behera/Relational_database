import React, { useState } from 'react';

const DishForm = () => {
  const [dishName, setDishName] = useState('');
  const [recipe, setRecipe] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dish Name:', dishName);
    console.log('Recipe:', recipe);
    
  };

  return (
    <div>
      <h2>Enter Dish Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Dish Name:
          <input
            type="text"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Recipe:
          <textarea
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DishForm;

