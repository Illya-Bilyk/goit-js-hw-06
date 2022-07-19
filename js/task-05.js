const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

const textInput = event => {
  nameRef.textContent = event.currentTarget.value;
};

inputRef.addEventListener('input', textInput);
