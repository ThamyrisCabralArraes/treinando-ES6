const div = document.querySelector('div');

const menu = [
  {
    name: 'Bread',
    categories: 'breakfast',
  },
  {
    name: 'Pasta',
    categories: 'Dinner',
  },
  {
    name: 'Pastel',
    categories: 'Lunch',
  },
  {
    name: 'Fish and Fries',
    categories: 'Lunch',
  },
  {
    name: 'Tapioca',
    categories: 'Dinner',
  },
  {
    name: 'Eggs',
    categories: 'Dinner',
  },
];

const spreed = [...new Set(menu.map((categorie) => categorie.categories))];

div.innerHTML = spreed
  .map((item) => {
    return `<button>${item}</button>`;
  })
  .join('');
