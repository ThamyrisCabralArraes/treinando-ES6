const main = document.querySelector('main');

const people = [
  {
    name: 'Thamyris',
    age: 34,
    position: 'developer',
  },
  {
    name: 'Carlos',
    age: 37,
    position: 'developer',
  },
  {
    name: 'Raionara',
    age: 30,
    position: 'developer',
  },
];

const names = people.map((person) => `<h1> ${person.name}</h1>`);

main.innerHTML = names.join('');
