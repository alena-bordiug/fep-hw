function sumNumbers() {
  let value = 0;

  function calculate(number) {
    return value += number;
  }

  return calculate;
}

let sum = sumNumbers();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
