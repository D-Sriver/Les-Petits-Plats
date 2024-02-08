export function addTag() {
  const tagElement = document.querySelector(".tag");
  const inputElement = document.getElementById("search");
  const buttonElement = document.getElementById("button");

  function LogiqueAddTag() {
    tagElement.style.display = "flex";
    let height = 0;
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
  inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      LogiqueAddTag();
    }
  });
  buttonElement.addEventListener("click", LogiqueAddTag);
}
