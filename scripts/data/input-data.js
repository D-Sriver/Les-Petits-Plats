export function inputData() {
  const inputElement = document.getElementById('search');
  const buttonElement = document.getElementById('button');

  buttonElement.addEventListener('click', () => {
    afficherValeurInputConsole(inputElement);
  });
}

export function afficherValeurInputConsole(inputElement) {
  const valeurInput = inputElement.value;
  console.log(valeurInput);
}


