// importation des fonctions à exécuter
import { displayRecipes } from './Templates/recipe-card.js';
import { addTag } from './data/input-data.js';
import { displayRecipeCounter } from './utils/recipe-counter.js';


// Appel des fonctions
displayRecipes();
displayRecipeCounter();
addTag();