const menu = [
  {
    name: 'Bread',
    categories: 'breakfast',
    value: 10,
  },
  {
    name: 'Pasta',
    categories: 'Dinner',
    value: 20,
  },
  {
    name: 'Pastel',
    categories: 'Lunch',
    value: 6,
  },
  {
    name: 'Fish and Fries',
    categories: 'Lunch',
    value: 25,
  },
  {
    name: 'Tapioca',
    categories: 'Dinner',
    value: 8,
  },
  {
    name: 'Eggs',
    categories: 'Dinner',
    value: 4,
  },
];

const lowValue = menu.filter((valor) => valor.value < 10);
console.log(lowValue);

const categorie = menu.filter((categorie) => categorie.categories === 'Dinner');
console.log(categorie);
