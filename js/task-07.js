const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
const body = document.querySelector('body');
const fontControl = event => {
  const size = event.currentTarget.value;
  textRef.style.fontSize = `${size}px`;
};

inputRef.addEventListener('input', fontControl);
