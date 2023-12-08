class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Appartment {
  residents = [];

  addResidents(person) {
    this.residents.push(person);
  }
}

class House {
  appartments = [];

  constructor(maxNumberOfAppartment) {
    this.maxNumberOfAppartment = maxNumberOfAppartment;
  }

  addAppartment(appartment) {
    if (this.appartments.length < this.maxNumberOfAppartment) {
      this.appartments.push(appartment);
    } else {
      console.log(
        `The max number of apartments is ${this.maxNumberOfAppartment}`,
      );
    }
  }
}

const personMale = new Person('John', 'Male');
const personFemale = new Person('Kate', 'Female');
const person3 = new Person('Kate', 'Female');

const residentJohn = new Appartment();
const residentKate = new Appartment();
const resident3 = new Appartment();

residentJohn.addResidents(personMale);
residentKate.addResidents(personFemale);
resident3.addResidents(person3);

const building = new House(2);

building.addAppartment(residentJohn);
building.addAppartment(residentKate);
building.addAppartment(resident3);

console.log(building);
