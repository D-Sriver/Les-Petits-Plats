// importation des fonctions à exécuter
import { inputData } from './data/input-data.js';
import { displayRecipes } from './Templates/recipe-card.js';
import { displayRecipeCounter } from './utils/recipe-counter.js';


// Appel des fonctions
displayRecipes();
displayRecipeCounter();
inputData();