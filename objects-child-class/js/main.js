//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dof extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const myDof = new Dof("ada", "bull");
console.log(myDof.name);
