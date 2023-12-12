class Hamburger {
  static SIZE_SMALL = {
    price: 50,
    calories: 20,
  };

  static SIZE_BIG = {
    price: 100,
    calories: 40,
  };

  static STUFFING_CHEESE = {
    price: 10,
    calories: 20,
  };

  static STUFFING_SALAD = {
    price: 20,
    calories: 5,
  };

  static STUFFING_POTATO = {
    price: 15,
    calories: 10,
  };

  static TOPPING_SPICE = {
    price: 15,
    calories: 0,
  };

  static TOPPING_MAYO = {
    price: 10,
    calories: 20,
  };

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculateCalories() {
    let calories = this.size.calories + this.stuffing.calories;

    for (let topping of this.toppings) {
      calories += topping.calories;
    }

    return calories;
  }

  calculatePrice() {
    let price = this.size.price + this.stuffing.price;

    for (let topping of this.toppings) {
      price += topping.price;
    }

    return price;
  }
}

// маленький гамбургер з начинкою з сиру
let hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log('Calories:', hamburger.calculateCalories());

// скільки коштує
console.log('Price:', hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А скільки тепер коштує?
console.log('Price with spice:', hamburger.calculatePrice());
