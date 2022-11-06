const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const NavEl = document.querySelector('#ingredients');

fingridewnts.forEach(element => {
  const itemEl = document.createElement('li');

  itemEl.classList.add('item');
  iremEl.textContent = element;
  navEl.appendChild(itemEl);
});