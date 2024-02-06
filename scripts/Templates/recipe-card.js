import { recipes } from '../data/recipes.js';

const recipeContainer = document.querySelector('.recipes');

const generateRecipeHTML = (recipe) => {
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

const displayRecipes = () => {
  recipes.forEach(recipe => {
    const recipeHTML = generateRecipeHTML(recipe);
    recipeContainer.innerHTML += recipeHTML;
  });
};
export { displayRecipes };
