const priceTotal = document.querySelector('#price-total');
const divMaster = document.querySelector('#div-master');

const cart = [
  {
    phone: 'Sansumg 7',
    price: '599.99',
    total: 0,
  },
  {
    phone: 'Iphone 14',
    price: '5599.99',
    total: 0,
  },
  {
    phone: 'Sansumg 10',
    price: '799.99',
    total: 0,
  },
  {
    phone: 'Iphone 11',
    price: '3099.99',
    total: 0,
  },
  {
    phone: 'Xiome',
    price: '999.99',
    total: 0,
  },
  {
    phone: 'LG 20',
    price: '2999.99',
    total: 0,
  },
];

const cartMap = () => {};

const divPhones = () => {
  const divPhone = document.querySelectorAll('.divPhone');
  for (let index = 0; index < divPhone.length; index += 1) {
    const elementPhone = document.createElement('p');
    elementPhone.classList.add('class-p');
    elementPhone.innerHTML = ` ${cart[index].phone}`;
    divPhone[index].appendChild(elementPhone);
  }
};

const divValores = () => {
  const divPhone = document.querySelectorAll('.divPhone');
  for (let index = 0; index < divPhone.length; index += 1) {
    const element = document.createElement('p');
    element.classList.add('class-p');
    element.textContent = `Price: R$ ${cart[index].price}`;
    divPhone[index].appendChild(element);
  }
};

const calcularTotal = () => {
  const cartTotal = cart.reduce(
    (total, numeroAtual) => total + numeroAtual.price * numeroAtual.total,
    0,
  );
  priceTotal.textContent = `R$ ${cartTotal.toFixed(2)}`;
};

const takeInputValue = (e) => {
  const { value, id } = e.target;
  cart[id].total = +value;
  calcularTotal();
};

const eventInput = () => {
  const input = document.querySelectorAll('.input-quant');

  for (let index = 0; index < input.length; index += 1) {
    input[index].addEventListener('change', takeInputValue);
  }
};

const createDivs = () => {
  for (let index = 0; index < cart.length; index += 1) {
    const div = document.createElement('div');
    div.classList.add('divPhone');
    const creatInput = document.createElement('input');
    creatInput.id = index;
    creatInput.min = '0';
    creatInput.value = '0';
    creatInput.classList.add('input-quant');
    creatInput.type = 'number';
    const img = document.createElement('img');
    img.src = 'https://img.olx.com.br/thumbs256x256/05/054137456638882.jpg';
    img.classList.add('img');
    div.appendChild(img);
    div.appendChild(creatInput);
    divMaster.appendChild(div);
  }
};

window.onload = () => {
  createDivs();
  divPhones();
  divValores();
  eventInput();
};
