// var
// let and const

// console.log(a);
// let a = 10;

// var a = 10;
// a = 20;
// console.log(a);

// function test() {
//   var a = 10;
//   console.log(a);
// }
// test();

// var a = 10;
// console.log(a);
// (function () {
//   var a = 30;
//   console.log(a);
// })();

// globalThis.a = 1000;
// (function () {
//   var message = "Hello";
//   console.log(message, globalThis.a);
// })();

// function test(a, b, ...rest) {
//   console.log("hello");
// }
// console.log(test.name);
// console.log(test.length);

// NFE

// const getName = function test(name) {
//   console.log(`Hello ${name}`);
//   return test();
// };
// getName("World");

// new Function

// let getName = new Function(`console.log("hello")`);
// getName();

// SetTimeOut

// setTimeout(callback,time,arg)
// console.log(0);
// setTimeout(
//   (a) => {
//     console.log(a);
//   },
//   2000,
//   "Hi"
// );

// SetInterval

// let setId = setInterval(() => {
//   let date = new Date();
//   console.log(
//     `Today ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//   );
// }, 1000);
// clearInterval(setId);
// clearTimeout(setId);

// Apply call and bind

const users = [
  {
    name: "Azizbek",
    surName: "Mamatqulov",
    age: 15,
  },
  {
    name: "Mamarasul",
    surName: "Rasulov",
    age: 20,
  },
];

function getFullName(a, b) {
  console.log(a, b);
  console.log(`${this.name} ${this.surName}`);
}
// getFullName.call(user);
for (const iterator of users) {
  // getFullName.call(iterator, "eshmat aka", "toshmat aka");
  // getFullName.apply(iterator, ["eshmat aka", "toshmat aka"]);
  getFullName.bind(iterator, "eshmat aka", "toshmat aka")();
  // func();
}
