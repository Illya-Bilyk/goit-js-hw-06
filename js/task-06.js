const validInput = document.querySelector('#validation-input');

console.log(validInput.dataset.length);

const correctInput = event => {
  if (validInput.dataset.length > event.currentTarget.value.length) {
    validInput.classList.add('invalid');
  } else {
    validInput.classList.remove('invalid');
    validInput.classList.add('valid');
  }
};

validInput.addEventListener('blur', correctInput);
