export function addTag() {
  const tagElement = document.querySelector(".tag");
  const inputElement = document.getElementById("search");
  const buttonElement = document.getElementById("button");

  // ajout du tag
  function LogiqueAddTag() {
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

  // si la toucher entrer -> LogiqueAddTag
  inputElement.addEventListener("keyup", (event) => {
    if (event.key === "Enter" && inputElement.value !== "") {
      LogiqueAddTag();
    }
  });

  // si le bouton est cliqué -> LogiqueAddTag
  buttonElement.addEventListener("click", () => {
    if (inputElement.value !== "") {
      LogiqueAddTag();
    }
  });

  // si l'input est vide -> on cache le tag
  inputElement.addEventListener("input", () => {
    if (inputElement.value === "") {
      tagElement.style.display = "none";
    }
  });
}
