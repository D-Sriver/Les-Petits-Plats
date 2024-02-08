// Import des données
import { getAppareil, getIngredients, getUstensils } from '../data/list-select-data.js';

const ingredientSelect = document.getElementById('ingredient');
const appareilSelect = document.getElementById('equipment');
const ustensilsSelect = document.getElementById('utensil');

export function ingredientInsert() {
  const ingredients = getIngredients();
  ingredients.forEach((ingredient) => {
    const option = document.createElement('option');
    option.textContent = ingredient;
    ingredientSelect.appendChild(option);
  });
}

export function appareilInsert() {
  const appareils = getAppareil();
  appareils.forEach((appareil) => {
    const option = document.createElement('option');
    option.textContent = appareil;
    appareilSelect.appendChild(option);
  });
}

export function ustensilsInsert() {
  const ustensils = getUstensils();
  ustensils.forEach((ustensil) => {
    const option = document.createElement('option');
    option.textContent = ustensil;
    ustensilsSelect.appendChild(option);
  });
}