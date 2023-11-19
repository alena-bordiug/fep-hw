// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let array = ['a', 2, 'b', 3, 3, 4, 'c'];

function calcAverage(arr) {
  let sum = 0;
  let countOfNumbers = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
      countOfNumbers++;
    }
  }
  return sum / countOfNumbers;
}

console.log(calcAverage(array));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let operandA = getOperand('Enter operand A');
let operator = getOperator();
let operandB = getOperand('Enter operand B');
let result = doMath(operandA, operator, operandB);

alert(`${operandA} ${operator} ${operandB} = ${result}`);

function getOperand(operandMessage) {
  let operand;
  do {
    if (operand !== null) {
      operand = Number(prompt(operandMessage));
    }
  } while (isNaN(operand));
  return operand;
}

function getOperator() {
  let operator;
  do {
    if (operator !== null) {
      operator = prompt('Enter operator +, -, *, /, %, ^');
    }
  } while (
    operator !== '+' &&
    operator !== '-' &&
    operator !== '*' &&
    operator !== '/' &&
    operator !== '%' &&
    operator !== '^'
  );
  return operator;
}

function doMath(x, znak, y) {
  switch (znak) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return x / y;
    case '%':
      return x % y;
    case '^':
      return x ** y;
  }
}

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

let mainArrayLength = getArrayLength('Set length of main array');
let innerArrayLength = getArrayLength('Set length of inner array');

console.log(fillArray(mainArrayLength, innerArrayLength));

function fillArray(mainArrLength, innerArrLength) {
  let arr = [];
  for (let i = 0; i < mainArrLength; i++) {
    let innerArr = [];
    for (let j = 0; j < innerArrLength; j++) {
      const value = prompt(
        `Enter value of inner array ${i + 1}, index ${j + 1 - 1}:`,
      );
      innerArr.push(value);
    }
    arr.push(innerArr);
  }
  return arr;
}

function getArrayLength(arrayLengthMessage) {
  let array;
  do {
    if (array !== null) {
      array = Math.floor(prompt(arrayLengthMessage));
    }
  } while (isNaN(array));
  return array;
}

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const inputStroke = prompt('Enter text');
const symbolsToRemove = prompt('Enter letters you want to remove');

console.log(removeElement(inputStroke, symbolsToRemove));

function removeElement(input, elementsToRemove) {
  let inputElement = input.split('');
  for (let i = 0; i < inputElement.length; i++) {
    if (elementsToRemove.includes(inputElement[i])) {
      inputElement.splice(i, 1);
      i--;
      };
  }
    return inputElement.join('')
}
