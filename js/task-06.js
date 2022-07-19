const validInputRef = document.querySelector('#validation-input');

console.log(validInputRef.dataset.length);

const correctInput = event => {
  if (validInputRef.dataset.length > event.currentTarget.value.length) {
    validInputRef.classList.add('invalid');
  } else {
    validInputRef.classList.remove('invalid');
    validInputRef.classList.add('valid');
  }
};

validInputRef.addEventListener('blur', correctInput);
