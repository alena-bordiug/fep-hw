
// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, остальні обнулити.

let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// Знайти суму та кількість позитивних елементів.

let sumOfPositiveElem = 0;
let countOfPositiveElem = 0;

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] > 0) {
    sumOfPositiveElem += arr[i];
    countOfPositiveElem++;
  }
}
console.log(`Sum is: ${sumOfPositiveElem}\nCount is: ${countOfPositiveElem}`);

// Знайти мінімальний елемент масиву та його порядковий номер.

let minElemOfArr = Math.min(...arr);
let indexOfMinElem = arr.indexOf(minElemOfArr);

console.log(`Min digit is: ${minElemOfArr}, with index: ${indexOfMinElem}`);

// Знайти максимальний елемент масиву та його порядковий номер.

let maxElemOfArr = Math.max(...arr);
let indexOfMaxElem = arr.indexOf(maxElemOfArr);

console.log(`Max digit is: ${maxElemOfArr}, with index: ${indexOfMaxElem}`);

// Визначити кількість негативних елементів.

