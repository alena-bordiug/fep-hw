let arr = [];
let arrayLength;

if (arrayLength !== null) {
  do {
      arrayLength = prompt('Set array length');
  } while ((isNaN(arrayLength)));
};

for (let i = 0; i < arrayLength; i++) {
  let arrayElem = prompt('Set array element #' + (i + 1));
  arr.push(arrayElem);
}
console.log(arr);

let arrSort = arr.sort(function (a, b) {
  return a - b;
});
console.log(arrSort);

let arrCut = arr.splice(1, 3);
console.log(arrCut);
