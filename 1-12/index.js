// Create array
// let arr = [];
// let newArr = new Array();

// console.log(arr, newArr);

// let fruits = ["Apple", "Orange", "Plum"];
// fruits[0] = "Peach";
// fruits[3] = "Apple";
// console.log(fruits);

// let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits.length);

// let arr = [
//   "Apple",
//   { name: "John" },
//   true,
//   function () {
//     console.log("hello");
//   },
// ];
// console.log(arr[1].name);
// console.log(arr[3]());

// let fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits[fruits.length - 1]);

// let fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits.at(-1));

// let arr = ["Tomato", "Peach", "Grape"];
// // arr.push("Apple");
// // arr.pop();
// arr.unshift("Apple");
// arr.shift();
// console.log(arr);

// let fruits = [];

// fruits[99999] = 5;

// console.log(fruits);
// fruits.age = 25;
// console.log(fruits);

// let fruits = ["Apple", "Orange", "Plum"];

// for (let item of fruits) {
//   console.log(item);
// }

// let arr = ["Apple", "Orange", "Pear"];

// for (let key in arr) {
//   console.log(arr[key]);
// }

// let arr = [1, 2, 3, 4, 5];

// arr.length = 2;
// console.log(arr);

// arr.length = 5;
// console.log(arr[3]);

// let arr = new Array("20", "asd");

// console.log(arr);

// // console.log(arr.length);

// let arr = ["I", "go", "home"];

// delete arr[1];

// console.log(arr[1]);

// console.log(arr.length);

// let arr = ["I", "study", "JavaScript"];

// arr.splice(1, 1);

// console.log(arr); // ["I", "JavaScript"]

// let arr = ["I", "study", "JavaScript", "right", "now"];

// arr.splice(0, 3, "Let's", "dance");

// console.log(arr);

// let arr = ["I", "study", "JavaScript", "right", "now"];

// let removed = arr.splice(0, 2);

// console.log(removed);

// let arr = ["I", "study", "JavaScript"];

// arr.splice(2, 0, "complex", "language");

// console.log(arr);

// let arr = [1, 2, 5];

// arr.splice(-1, 0, 3, 4);

// console.log(arr); // 1,2,3,4,5

// let arr = ["t", "e", "s", "t"];

// console.log(arr.slice(1, 3));

// console.log(arr.slice(-2));

// let arr = [1, 2];

// // create an array from: arr and [3,4]
// console.log(arr.concat([3, 4])); // 1,2,3,4

// // create an array from: arr and [3,4] and [5,6]
// console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// // create an array from: arr and [3,4], then add values 5 and 6
// console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// let arr = [1, 0, false];

// console.log(arr.indexOf(0)); // 1
// console.log(arr.indexOf(false)); // 2
// console.log(arr.indexOf(null)); // -1

// console.log(arr.includes(1)); // true

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// console.log(arr); // 5,4,3,2,1

// let names = "Bilbo, Gandalf, Nazgul";

// let arr = names.split(", ");

// console.log(arr);
// for (let name of arr) {
//   console.log(`A message to ${name}.`); // A message to Bilbo  (and other names)
// }

// let str = "test";

// console.log(str.split(" ")); // t,e

// let arr = ["Bilbo", "Gandalf", "Nazgul"];

// let str = arr.join("; ");
// console.log(str);

// console.log(Array.isArray({})); // false

// console.log(Array.isArray([])); // true
