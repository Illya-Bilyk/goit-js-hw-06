function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const textColorRef = document.querySelector('.color');

const colorChanger = () => {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  textColorRef.innerHTML = randomColor;
};

buttonRef.addEventListener('click', colorChanger);
