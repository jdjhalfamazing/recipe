import React, { useState } from 'react';

function RecipeApp() {
  const [recipes, setRecipes] = useState([
    { name: "Pasta with Tomato Sauce", ingredients: ["pasta", "tomato sauce"] },
    { name: "Chicken Curry", ingredients: ["chicken", "curry powder", "coconut milk"] },
    { name: "Grilled Cheese Sandwich", ingredients: ["bread", "cheese"] }
  ]);

  const [newRecipeName, setNewRecipeName] = useState("");
  const [newRecipeIngredients, setNewRecipeIngredients] = useState("");

  const handleNewRecipeNameChange = (event) => {
    setNewRecipeName(event.target.value);
  }

  const handleNewRecipeIngredientsChange = (event) => {
    setNewRecipeIngredients(event.target.value);
  }

  const handleAddRecipe = () => {
    const newRecipe = {
      name: newRecipeName,
      ingredients: newRecipeIngredients.split(",")
    };

    setRecipes([...recipes, newRecipe]);
    setNewRecipeName("");
    setNewRecipeIngredients("");
  }

  return (
    <div>
      <h1>My Recipe App</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h2>{recipe.name}</h2>
            <p>Ingredients: {recipe.ingredients.join(", ")}</p>
          </li>
        ))}
      </ul>
      <h2>Add a New Recipe</h2>
      <label htmlFor="new-recipe-name">Name:</label>
      <input type="text" id="new-recipe-name" value={newRecipeName} onChange={handleNewRecipeNameChange} />
      <br />
      <label htmlFor="new-recipe-ingredients">Ingredients:</label>
      <input type="text" id="new-recipe-ingredients" value={newRecipeIngredients} onChange={handleNewRecipeIngredientsChange} />
      <br />
      <button onClick={handleAddRecipe}>Add Recipe</button>
    </div>
  );
}

export default RecipeApp;
