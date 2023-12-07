class Person {
  personInfo(name, gender) {
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
  maxNumberOfAppartment = 190;

    getMaxNumberOfAppartment(maxNumberOfAppartment) {
        this.maxNumberOfAppartment = maxNumberOfAppartment;
    }
    
}


//  Створити клас Будинок.

// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.

// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти,
// чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
