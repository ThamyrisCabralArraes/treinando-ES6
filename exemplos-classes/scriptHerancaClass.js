class Dev {
  constructor(name, age, framework) {
    this.name = name;
    this.age = age;
    this.framework = framework;
  }

  saudacao = () => {
    return `Sou ${this.name}, tenho ${this.age} anos, e amo ${this.framework}.`;
  };
}

const dev = new Dev('Thamyris', 34, 'React');
console.log(dev);
console.log(dev.saudacao());

class NewDev extends Dev {
  constructor(name, age, framework, naturality) {
    super(name, age, framework);
    this.naturality = naturality;
  }
}

const dev2 = new NewDev('Carlos', 37, 'Go', 'Brazilian');
console.log(dev2);
console.log(dev2.saudacao());

console.log('...this....');

const obj1 = {
  names: 'Thamyris',
  metodo: function () {
    return this;
  },
};
console.log(obj1.metodo());
const obj2 = { lastname: 'Silva' };

console.log(obj1.metodo.call(obj2));
