class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.car = null;
  }

  addCar(car) {
    this.car = car;
  }

  userInfo() {
    console.log(
      `Пользователь ${this.name}, возраст ${this.age}, машина ${this.car.model}, ${this.car.year}, ${this.car.marka}`,
    );
  }
}

class Auto {
  constructor(model, year, marka) {
    this.model = model;
    this.year = year;
    this.marka = marka;
  }

  autoInfo() {
    console.log(
      `Модель - ${this.model}, год - ${this.year}, марка авто - ${this.marka}`,
    );
  }
}

function getUserInfo() {
  const userName = prompt("Введите свое имя");
  const userAge = Number(prompt("Введите сколько вам лет"));

  if (userName === null || userName === "") {
    throw new Error("Need to write something down.");
  }

  if (Number.isNaN(userAge)) {
    throw new Error("Age must be a number.");
  }

  if (userAge < 18) {
    throw new Error("You are too young for this.");
  }

  return { userName, userAge };
}

function getAutoInfo() {
  const autoModel = prompt("Введите модель автомобиля");
  const autoYear = Number(prompt("Введите год машины"));
  const autoMarka = prompt("Введите марку машины");

  if (autoModel === null || autoModel === "") {
    throw new Error("Need to write something down.");
  }

  if (autoMarka === null || autoMarka === "") {
    throw new Error("Need to write something down.");
  }

  if (Number.isNaN(autoYear) || autoYear < 1886 || autoYear > 2026) {
    throw new Error("Введите корректный год выпуска.");
  }

  return { autoModel, autoMarka, autoYear };
}

const { userName: person1Name, userAge: person1Age } = getUserInfo();
const { userName: person2Name, userAge: person2Age } = getUserInfo();

const {
  autoModel: person1Model,
  autoMarka: person1Marka,
  autoYear: person1Year,
} = getAutoInfo();

const {
  autoModel: person2Model,
  autoMarka: person2Marka,
  autoYear: person2Year,
} = getAutoInfo();

const personAuto1 = new Auto(person1Model, person1Year, person1Marka);
const personAuto2 = new Auto(person2Model, person2Year, person2Marka);

const person1 = new Person(person1Name, person1Age);
person1.addCar(personAuto1);

const person2 = new Person(person2Name, person2Age);
person2.addCar(personAuto2);

person1.userInfo();
person2.userInfo();
