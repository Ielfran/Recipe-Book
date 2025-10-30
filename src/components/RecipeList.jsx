import React from 'react';
import RecipeItem from './RecipeItem';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) {
    return <p className="no-recipes-found">No recipes found matching your criteria.</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;