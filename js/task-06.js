const validInputRef = document.querySelector('#validation-input');

const checking = Number(validInputRef.dataset.length);

const correctInput = event => {
  const checking = Number(validInputRef.dataset.length);

  if (checking === event.currentTarget.value.length) {
    validInputRef.classList.remove('invalid');
    validInputRef.classList.add('valid');
  } else validInputRef.classList.add('invalid');
};

validInputRef.addEventListener('blur', correctInput);
