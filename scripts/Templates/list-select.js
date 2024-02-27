// Import des données
import { getAppareil, getIngredients, getUstensils } from '../data/list-select-data.js';

function insertOptions(optionsList, items) {
  items.forEach((item) => {
    const option = document.createElement('li');
    option.classList.add('custom-option');
    option.textContent = item;
    option.dataset.value = item;

    option.addEventListener('click', () => {
      const selectedValue = option.dataset.value;
      console.log(selectedValue);
    });

    optionsList.appendChild(option);
  });
}

// Fonction pour générer et insérer les options dans la catégorie
function insertCategory(categoryElement, items) {
  const optionsList = categoryElement.querySelector('.options-list');
  optionsList.innerHTML = '';
  insertOptions(optionsList, items);
}

export function ingredientInsert() {
  const categoryElement = document.querySelector('.custom-dropdown:nth-child(1)'); 
  const ingredients = getIngredients();
  insertCategory(categoryElement, ingredients);
}

export function appareilInsert() {
  const categoryElement = document.querySelector('.custom-dropdown:nth-child(2)'); 
  const appareils = getAppareil();
  insertCategory(categoryElement, appareils);
}

export function ustensilsInsert() {
  const categoryElement = document.querySelector('.custom-dropdown:nth-child(3)');
  const ustensils = getUstensils();
  insertCategory(categoryElement, ustensils);
}

// Ajouter des écouteurs de changement pour chaque catégorie
document.querySelectorAll('.custom-dropdown').forEach((categoryElement) => {
  categoryElement.addEventListener('click', () => {
    const optionsList = categoryElement.querySelector('.options-list');
    optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
  });
});

// Fermer la liste déroulante lorsqu'on clique en dehors
document.addEventListener('click', (event) => {
  if (!event.target.closest('.custom-dropdown')) {
    document.querySelectorAll('.options-list').forEach((optionsList) => {
      optionsList.style.display = 'none';
    });
  }
});
