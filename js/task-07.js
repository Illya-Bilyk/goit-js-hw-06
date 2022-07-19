const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const fontControl = event => {
  const size = event.currentTarget.value;
  const markup = ` <span id="text" style="font-size: ${size}px">Abracadabra!</span>`;

  textRef.innerHTML = markup;
};

inputRef.addEventListener('input', fontControl);
