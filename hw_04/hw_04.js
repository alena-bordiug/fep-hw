// Вивести на сторінку в один рядок через кому числа від 10 до 20.

let res = [];
for (let i = 10; i <= 20; i++) {
  res.push(i);
}
console.log(res.join(', ') + '.');

// Вивести квадрати чисел від 10 до 20.

let square = [];
for (let i = 10; i <= 20; i++) {
  let res = i ** 2;
  square.push(res);
}
console.log(square.join(', ') + '.');

// Вивести таблицю множення на 7.

for (let i = 1; i <= 10; i++) {
  let table = i * 7;
  console.log(`${i} * 7 = ${table}`);
}

// Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(sum);

// Знайти добуток усіх цілих чисел від 15 до 35.

let mult = BigInt(1);
for (let i = 15; i <= 35; i++) {
  mult *= BigInt(i);
}
console.log(mult.toString());

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let sumOfNumbers = 0;
for (let i = 1; i <= 500; i++) {
  sumOfNumbers += i;
}
let average = sumOfNumbers / 500;
console.log(average);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.

let evenNum = 0;
for (let i = 30; i <= 80; i+=2) {
  evenNum += i;
}
console.log(evenNum);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let numMultofThree = [];
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    numMultofThree.push(i);
    };
};
console.log(numMultofThree.join(', '));

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let digits = [];
let naturalNumber;

do {
  naturalNumber = prompt('Enter number greater than 0');
  if (naturalNumber === null) {
    break;
    };
} while (naturalNumber <= 0);

for (let i = 1; i <= naturalNumber; i++) {
  if (naturalNumber % i === 0) {
    digits.push(i);
    };
}
console.log(`dividers of ${naturalNumber}: ${digits}`);

// Визначити кількість його парних дільників.

let pairDividers = 0;
for (let i = 0; i <= digits.length; i++) {
  let currentDigit = digits[i];

  if (currentDigit % 2 === 0) {
    pairDividers++;
    };
}
console.log(`count of pair dividers is: ${pairDividers}`);

// Знайти суму його парних дільників.

let sumOfPairDividers = 0;
for (let i = 0; i <= digits.length; i++) {
    let currentDigit = digits[i];
    
    if (currentDigit % 2 === 0) {
        sumOfPairDividers += currentDigit;
    };
};
console.log(`the sum of pair dividers is: ${sumOfPairDividers}`);

// Надрукувати повну таблицю множення від 1 до 10.

for (let i = 1; i <= 10; i++) {
    for (let j = 2; j <= 10; j++) {
        let multiplyTableRes = i * j;
        console.log(`${i} * ${j} = ${multiplyTableRes}`)
    };
};