import { recipes } from '../data/recipes.js';
// récupère la div qui contiendra les recettes
const recipeContainer = document.querySelector('.recipes');
const generateRecipeHTML = (recipe) => {
  // crée les carte pour chaque recette en utilisant les données de recipes.js
  return `
    <article class="recipe-container">
      <img src="assets/img/Recipe/${recipe.image}" alt="repas" />
      <div class="recipes-description">
        <div class="title-card">
          <h3>${recipe.name}</h3>
          <div class="time">${recipe.time} min</div>
        </div>
        <span class="uppercase">Recette</span>
        <p>${recipe.description}</p>
        <span class="uppercase">Ingrédients</span>
        <div class="ingredients-container">
          ${recipe.ingredients.map(ingredient => `
            <div>
              <span>${ingredient.ingredient}</span>
              ${ingredient.quantity ? `<span class="quantity">${ingredient.quantity}${ingredient.unit || ''}</span>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </article>
  `;
};
// affiche les recettes
const displayRecipes = () => {
  recipes.forEach(recipe => {
    const recipeHTML = generateRecipeHTML(recipe);
    recipeContainer.innerHTML += recipeHTML;
  });
};
export { displayRecipes };
