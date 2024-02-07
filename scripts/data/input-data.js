export function addTag() {
  const tagElement = document.querySelector(".tag");
  const inputElement = document.getElementById("search");
  const buttonElement = document.getElementById("button");

  buttonElement.addEventListener("click", () => {
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
  });
}
