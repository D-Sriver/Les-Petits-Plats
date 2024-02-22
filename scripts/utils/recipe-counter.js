import { recipes } from '../data/recipes.js';

const recipeCounter = document.querySelector('.counter-recipe');
const recipeTotal = document.querySelector('.counter-total');
const addRecipe = 1450;
const displayRecipeCounter = () => {
  recipeCounter.textContent = `${recipes.length + addRecipe}`;
  recipeTotal.textContent = `${recipes.length + addRecipe} recettes`;
}

// Afficher le nombre total de recettes dans la console
console.log(recipes.length);

// Appeler la fonction pour afficher le nombre total de recettes

export { displayRecipeCounter };
