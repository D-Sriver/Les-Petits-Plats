import { recipes } from '../data/recipes.js';

const recipeCounter = document.querySelector('.counter-recipe');
const recipeTotal = document.querySelector('.counter-total');

const displayRecipeCounter = () => {
  recipeCounter.textContent = `${recipes.length + 1450}`;
  recipeTotal.textContent = `${recipes.length + 1450} recettes`;
}

// Afficher le nombre total de recettes dans la console
console.log(recipes.length);

// Appeler la fonction pour afficher le nombre total de recettes
displayRecipeCounter();
