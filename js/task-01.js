const categoriesRef = document.querySelector('#categories');

console.log('Number of categories:', categories.children.length);

const array = document.querySelectorAll('.item');

array.forEach(element => {
  const categoryName = element.querySelector('h2').textContent;
  const numberOfElements = element.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}
Elements: ${numberOfElements}`);
});
