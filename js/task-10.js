function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('#controls input');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');

const createBoxes = amount => {
  let sizes = 30;

  for (let i = 0; i <= amount - 1; i++) {
    console.log(i);

    sizes += 10;
    const color = getRandomHexColor();
    const markup = `<div style="width: ${sizes}px; height: ${sizes}px; margin-top: 10px; background-color:${color}"></div>`;

    boxesRef.insertAdjacentHTML('beforeend', markup);
  }
};

const destroyBoxes = () => {
  boxesRef.innerHTML = '';
};

const inputValue = event => {
  let amount = event.currentTarget.value;
  console.log('amount', amount);

  const createClearBox = () => {
    destroyBoxes();
    createBoxes(amount);
    amount = 0;
  };

  btnCreateRef.addEventListener('click', createClearBox);
};

inputRef.addEventListener('blur', inputValue);
btnDestroyRef.addEventListener('click', destroyBoxes);
