import React from 'react';
import './RecipeItem.css';

const RecipeItem = ({ recipe }) => {
  return (
    <div className="recipe-item">
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <div className="recipe-meta">
        <span>Difficulty: {recipe.difficulty}</span>
        <span>Prep: {recipe.prepTime}</span>
        <span>Cook: {recipe.cookTime}</span>
      </div>
      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Instructions:</h4>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeItem;