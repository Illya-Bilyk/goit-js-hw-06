const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const list = ingredients.forEach(element => {
  const newItem = document.createElement('li');

  newItem.textContent = element;
  newItem.classList.add('item');
  ingredientsRef.append(newItem);
});
