function* generateNumber() {
  let number = 0;

  while (true) {
    yield `id_${number}`;
    number++;
  }
}

const generator = generateNumber();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
