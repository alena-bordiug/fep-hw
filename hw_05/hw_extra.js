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
console.log(
  `Sum of positive elements is: ${sumOfPositiveElem}\nCount is: ${countOfPositiveElem}`,
);

// Знайти мінімальний елемент масиву та його порядковий номер.

let minElemOfArr = Math.min(...arr);
let indexOfMinElem = arr.indexOf(minElemOfArr);
console.log(`Min digit is: ${minElemOfArr}, with index: ${indexOfMinElem}`);

// Знайти максимальний елемент масиву та його порядковий номер.
let maxElemOfArr = Math.max(...arr);
let indexOfMaxElem = arr.indexOf(maxElemOfArr);
console.log(`Max digit is: ${maxElemOfArr}, with index: ${indexOfMaxElem}`);

// Визначити кількість негативних елементів.

let countOfNegativeElem = 0;
for (elem of arr) {
  if (elem < 0) {
    countOfNegativeElem++;
  }
}
console.log(`Count of negative elements is: ${countOfNegativeElem}`);

// Знайти кількість непарних позитивних елементів.

let oddPositiveElem = 0;
for (elem of arr) {
  if (elem % 2 !== 0 && elem > 0) {
    oddPositiveElem++;
  }
}
console.log(`There are ${oddPositiveElem} positive odd elements`);

// Знайти кількість парних позитивних елементів.

let evenPositiveElem = 0;
for (elem of arr) {
  if (elem % 2 === 0 && elem > 0) {
    evenPositiveElem++;
  }
}
console.log(`There are ${evenPositiveElem} positive even elements`);

// Знайти суму парних позитивних елементів.

let sumOfevenElem = 0;
arr.forEach((elem) => {
  if (elem % 2 === 0 && elem > 0) {
    sumOfevenElem += elem;
  }
});
console.log(`The sum of even positive elements is: ${sumOfevenElem}`);

// Знайти суму непарних позитивних елементів.

let sumOfoddElem = 0;
arr.forEach((elem) => {
  if (elem % 2 !== 0 && elem > 0) {
    sumOfoddElem += elem;
  }
});
console.log(`The sum of odd positive elements is: ${sumOfoddElem}`);

// Знайти добуток позитивних елементів.

let multOfPositiveElem = 1;
arr.forEach((elem) => {
  if (elem > 0) {
    multOfPositiveElem *= elem;
  }
});
console.log(`The product of positive elements is: ${multOfPositiveElem}`);

// Знайти найбільший серед елементів масиву, остальні обнулити.

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== maxElemOfArr) {
    arr[i] = 0;
  }
}
console.log(`The max element of array is: ${maxElemOfArr}`);
console.log(arr);
