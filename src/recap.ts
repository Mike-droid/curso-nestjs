const myName = 'Miguel';
const myAge = 24;

const suma = (number1: number, number2: number) => {
  return number1 + number2;
};

suma(12, 12);

class Persona {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `my name is ${this.name} and I am ${this.age} years old`;
  }
}

const miguel = new Persona(24, 'Miguel');
miguel.getSummary();
