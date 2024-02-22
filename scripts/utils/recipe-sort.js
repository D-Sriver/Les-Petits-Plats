/* eslint-disable no-unused-vars */
//! a chaque recherche vider tableau de résultat

// On importe les données de recette
// On importe importe inputElement (récupérer la chaîne de caractère saisie par l'utilisateur)
// On récupère la chaîne de caractère saisie par l'utilisateur et on la stocke dans une variable
// On crée un tableau de recette filtrée
// on crée la fonction de recherche
// On boucle à travers toutes les recettes

/// On vérifie dans touts les noms de recettes si le nom inclus le mot de la saisie
/// On vérifie dans toutes les descriptions si le nom inclus le mot de la saisie
/// On vérifie dans tous les ingrédients si le nom inclus le mot de la saisie

// On retourne les recettes filtrées dans le tableau
// On n'affiche que les recettes filtrées
// On vide le tableau de résultat à chaque recherche

//importer les données de recette
//importer inputElement (récupérer la chaîne de caractère saisie par l'utilisateur)


import { inputElement } from "../data/input-data.js";
// Entrée utilisateur depuis le champ de recherche
const recettes = inputElement.value;
// on crée la fonction de recherche
function rechercheRecette(recettes) {
    // création du tableau de recette filtrée
    let recettesFilter = [];  
    // création de boucle à travers toutes les recettes
        for (let i = 0; i < recettes.length; i++) {
                // vérification dans touts les noms de recettes si le nom inclus le mot de la saisie
                if (recettes[i].name.includes(recettes)) {
                recettesFilter.push(recettes[i]);
                }
                // vérification dans toutes les descriptions si le nom inclus le mot de la saisie
                else if (recettes[i].description.includes(recettes)) {
                recettesFilter.push(recettes[i]);
                }
                // vérification dans tous les ingrédients si le nom inclus le mot de la saisie
                else if (recettes[i].ingredients.includes(recettes)) {
                recettesFilter.push(recettes[i]);
                }
        }
    // retourne les recettesFiltrées dans le tableaux 
    return recettesFilter;
}