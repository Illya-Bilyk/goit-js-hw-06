const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

const textInput = event => {
  nameRef.textContent = event.currentTarget.value;

  if (event.currentTarget.value === '') {
    nameRef.textContent = 'Anonymous';
  }
};

inputRef.addEventListener('input', textInput);
