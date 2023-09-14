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

//class 32
class Contractor {
  constructor(name, hourlyRate, yearsExp, hoursWorked) {
    this._name = name;
    this._hourlyRate = hourlyRate;
    this._yearsExp = yearsExp;
    this._hoursWorked = hoursWorked;
  }

  get name() {
    return this._name;
  }
  get hourlyRate() {
    return this._hourlyRate;
  }
  get yearsExp() {
    return this._yearsExp;
  }
  get hoursWorked() {
    return this._hoursWorked;
  }

  calculateProfit() {
    return this._hourlyRate * this._hoursWorked;
  }
  displayProfit() {
    console.log(`${this.name} has earned ${this.calculateProfit()} `);
  }
}

class FrontEnd extends Contractor {
  constructor(name, hourlyRate, yearsExp, hoursWorked, language) {
    super(name, hourlyRate, yearsExp, hoursWorked);
    this._language = language;
  }

  get language() {
    return this._language;
  }
  displayLanguage() {
    console.log(`${this.name} knows CSS, HTML, GSAP`);
  }
}

