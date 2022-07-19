function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector('.change-color');

const colorChanger = event => {};

buttonRef.addEventListener('click', colorChanger);

const bodyRef = document.querySelector('body');
// bodyRef.innerHTML = '<body style="background-color: ;">';
// bodyRef.style.backgroundColor = 'red';
