const counterRef = document.querySelector('#value');
const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

const increment = () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
};

incrementRef.addEventListener('click', increment);
decrementRef.addEventListener('click', decrement);
