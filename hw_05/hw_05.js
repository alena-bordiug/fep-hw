let arr = [];
let arrayLength;

do {
  arrayLength = Math.floor(prompt('Set array length'));
} while (isNaN(arrayLength));
console.log(arrayLength);

for (let i = 0; i < arrayLength; i++) {
  let arrayElem = prompt('Set array element #' + (i + 1));
  if (arrayElem !== null) {
    arr.push(arrayElem);
  } else {
    alert(
      `You cancel to enter elements, array length will be shorter than ${arrayLength}`,
    );
    break;
  }
}
console.log(arr);

let arrSort = arr.sort(function (a, b) {
  return a - b;
});
console.log(arrSort);

let arrCut = arr.splice(1, 3);
console.log(arr);
