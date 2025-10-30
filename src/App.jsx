import React, { useState, useMemo } from 'react';
import recipesData from './data/recipes'; 
import RecipeList from './components/RecipeList';
import FilterSortControls from './components/FilterSortControls';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const filteredRecipes = useMemo(() => {
    if (!searchTerm) {
      return recipesData;
    }
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return recipesData.filter(recipe =>
      recipe.title.toLowerCase().includes(lowercasedSearchTerm) ||
      recipe.description.toLowerCase().includes(lowercasedSearchTerm) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowercasedSearchTerm))
    );
  }, [searchTerm]);

  const sortedRecipes = useMemo(() => {
    let sortableRecipes = [...filteredRecipes];

    if (sortBy === 'title-asc') {
      sortableRecipes.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'title-desc') {
      sortableRecipes.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === 'difficulty-asc') {
      const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
      sortableRecipes.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
    } else if (sortBy === 'difficulty-desc') {
      const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
      sortableRecipes.sort((a, b) => difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty]);
    }

    return sortableRecipes;
  }, [filteredRecipes, sortBy]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Recipe Book</h1>
      </header>
      <FilterSortControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <RecipeList recipes={sortedRecipes} />
    </div>
  );
}

export default App;