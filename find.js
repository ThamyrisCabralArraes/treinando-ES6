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
//So volta um valor
const find = menu.find((valor) => valor.value < 10);
console.log(find);

const find2 = menu.find((names) => names.name === 'Eggs');
console.log(find2);
