// let arr = [-1, 2, 3, 4, 5, 6, -3, 4, -5];
// let result = arr.find(function array(value, index) {
//   return value > 0;
// });
// console.log(result);

// let result = arr.findIndex(function (value) {
//   return value > 3;
// });
// let result = arr.findLastIndex(function (value) {
//   return value > 3;
// });
// console.log(result);

// let arr = [1, 2, 3];
// let result = arr.reduce(function (sum, currentIndex) {
//   return sum * currentIndex;
// }, 0);
// console.log(result);

// let arr = [3, 5, 76, 324, 1, 2, 3, 4];
// let result = arr.sort((a, b) => a - b);
// console.log(result);

// let result = arr.filter((index) => index < 7);
// console.log(result);

// const fruits = ["apple", "orange", "cherry"];
// let text = "";
// let result = fruits.forEach(function (value, index) {
//   text += index + ": " + value + " ";
// });
// console.log(text);

// const numbers = [1, 2, 3, 4];
// let result = numbers.map(function (value, index) {
//   return value * 10;
// });
// console.log(result);

// const numbers = [1, 2, 3, 4];
// let result = numbers.every(function (value) {
//   return value > 0;
// });
// console.log(result);

// const numbers = [1, 2, 3, 4];
// let result = numbers.some(function (value) {
//   return value > 1;
// });
// console.log(result);

// const arr = [0, 1, 2, [[[3, 4]]]];
// let result = arr.flat(Infinity);
// console.log(result);

// const numbers = [1, 2, 3, 4];
// let result = Array.from(numbers, (value) => value + value);
// console.log(result);

// let obj = new Set();
// obj.add(1);
// obj.add(1);
// obj.add(10);
// obj.add("string");
// obj.add("string");
// console.log(obj);

// let arr = new Set([1, 2, 3, 4, 5, 1, 5, 5]);
// console.log(arr);

// let map = new Map();
// map.set("1", 2);
// map.set(undefined, 2);
// console.log(map.get("1"));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = fruits.fill("Kiwi", 2, 3);
// console.log(result);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.copyWithin(2, 0, 1);
console.log(result);
