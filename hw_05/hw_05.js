let arr = [];
const arrayLength = prompt('Set array length');

for (let i = 0; i < arrayLength; i++) {
    let arrayElem = Number(prompt('Set array elements'));
    arr.push(arrayElem);
    // console.log(typeof arrayElem);
};

document.write(arr.join(', ') + '<br>');

arr.sort(function (a, b) {
    return a - b;
});

document.write(arr.join(', '));


console.log(arr)

