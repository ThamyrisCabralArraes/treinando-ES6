const Dev = function (name, age, framework) {
  this.name = name;
  this.age = age;
  this.framework = framework;

  this.saudacao = function () {
    return `Sou ${this.name}, tenho ${this.age} anos, e amo ${this.framework}.`;
  };
};

const dev = Dev('Thamyris', 34, 'React');
console.log(dev);
console.log(dev.saudacao());

const NewDev = function (name, age, framework, nacionality) {
  const newDev = new Dev(name, age, framework);
  this.nacionality = nacionality;
  Object.setPrototypeOf(this, newDev);
};

const dev2 = new NewDev('Carlos', 37, 'Go', 'Brazilian');
console.log(dev2);
console.log(dev2.saudacao());
