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
    return `${this.name} has earned ${this.calculateProfit()} `;
  }
  displayLanguage() {
    console.log(`${this.name} `);
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
  // displayLanguage() {
  //   console.log(`${this.name} knows CSS, HTML, GSAP`);
  // }

  displayProfit() {
    return `${
      this.name
    } will have earned ${this.calculateProfit()}  at the end of task`;
  }
  displayLanguage() {
    super.displayLanguage();
    console.log(`${this.name} knows knows CSS, HTML, GSAP`);
  }
}

class BackEnd extends Contractor {
  constructor(name, hourlyRate, yearsExp, hoursWorked, language) {
    super(name, hourlyRate, yearsExp, hoursWorked);
    this._language = language;
  }

  get language() {
    return this._language;
  }
  displayLanguage() {
    super.displayLanguage();
    console.log(`${this.name} knows Node, Postman, Express and MongoDB`);
  }
}

const modBot = new BackEnd("Margo", 23, 15, 200, "Frontend");
const terryYaki = new FrontEnd("Terry", 15, 10, "Frontend");
const evaDraw = new FrontEnd("Eva", 45, 23, "frontend");

const people = [modBot, terryYaki, evaDraw];

for (these of people) {
  these.displayLanguage();
}
