import { getSearch, search } from '..//utils/search.js';

export function addTag() {
  const tagElement = document.querySelector(".tag");
  const inputElement = getSearch();
  const buttonElement = document.getElementById("button");

  // ajout du tag
  function logiqueAddTag() {
    // change le display du tag
    tagElement.style.display = "flex";
    let height = 0;

    // animation de l'agrandissement du tag
    const heightIntervalId = setInterval(() => {
      if (height < 40) {
        tagElement.style.height = height + "px";
        height++;
      } else {
        clearInterval(heightIntervalId);
      }
    }, 1);

    tagElement.textContent = inputElement.value;
  }

  // si la touche entrer -> logiqueAddTag
  search(inputElement).then(() => {
    inputElement.addEventListener("keyup", (event) => {
      if (event.key === "Enter" && inputElement.value !== "") {
        logiqueAddTag();
      }
    });
  });

  // si le bouton est cliqué -> logiqueAddTag
  buttonElement.addEventListener("click", () => {
    if (inputElement.value !== "") {
      logiqueAddTag();
    }
  });

  // si l'input est vide -> on cache le tag
  inputElement.addEventListener("input", () => {
    if (inputElement.value === "") {
      tagElement.style.display = "none";
    }
  });
}
