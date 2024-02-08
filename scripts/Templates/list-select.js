// Import des données
import { getAppareil, getIngredients, getUstensils } from '../data/list-select-data.js';

// Récupération des selecteurs du DOM
const ingredientSelect = document.getElementById('ingredient');
const appareilSelect = document.getElementById('appareil');
const ustensilsSelect = document.getElementById('ustensils');

getAppareil();
getIngredients();
getUstensils();

ingredientSelect();
appareilSelect();
ustensilsSelect();

//crée 3 fonctions pour générer les options des selecteurs
