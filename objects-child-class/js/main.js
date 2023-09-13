//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
  constructor(name) {
    this.name = name;
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

//just testing Anki
let thisArray = [5, 4, 2, 6, 4, 5, 3, 0];
console.log(thisArray.splice(3, 3));
console.log(thisArray);
console.log(thisArray.slice(3, 7));
