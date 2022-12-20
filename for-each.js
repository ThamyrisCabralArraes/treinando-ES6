const primeiroP = document.getElementsByClassName('exemplo');
const segundoP = document.getElementsByClassName('exemplo2');
const ul = document.getElementsByTagName('ul');
let count = 0;

const frutas = ['goiaba', 'abacaxi', 'melancia', 'manga'];

frutas.forEach(function (fruta) {
  const li = document.createElement('li');
  li.textContent = `${fruta}`;
  ul[0].append(li);
});

while (count <= frutas.length) {
  console.log(`${frutas[count]}`);
  count++;
}
