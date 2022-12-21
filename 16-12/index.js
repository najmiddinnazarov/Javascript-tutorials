// DDOS attack, flags, getter setter, prototype and __proto__

// function getData() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//     res.json()
//   );
// }

// function getCached(func) {
//   const obj = new Map();
//   return function (x) {
//     if (obj.has(x)) {
//       console.log(obj.get(x));
//       return obj.get(x);
//     } else {
//       let result = func();
//       return obj.set(x, result);
//     }
//   };
// }
// getData = getCached(getData);

// const obj = {
//   name: "Najmiddin",
//   surname: "Nazarov",
//   age: 32,
// };

// Object.defineProperty(obj, "name", { enumerable: false });

// for (const key in obj) {
//   console.log(key);
// }

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// get obj propery tisini olish
// set o'sha propertyni valuesin o'zgartirish
// const obj = {
//   name: "Najmiddin",
//   surname: "Nazarov",
//   age: 35,
//   get getFullName() {
//     return `${this.name} ${this.surname} ${this.age}`;
//   },
//   set getFullName(value) {
//     this.name = value.name;
//     this.surname = value.surname;
//     this.age = value.age;
//   },
// };
// obj.getFullName = { name: "John", surname: "Doe", age: 777 };
// // console.log(obj.name + " " + obj.surname);
// console.log(obj.getFullName);

// const obj1 = {
//   name: "Najmiddin",
//   surname: "Nazarov",
//   age: 35,
// };
// const obj2 = {
//   name: "Muhammad",
//   surname: "Abdusamatov",
//   age: 22,
//   car: "Malibu",
// };
// obj1.__proto__ = obj2;
// console.log(obj1);

// const obj1 = {
//   name: "Najmiddin",
//   surname: "Nazarov",
//   age: 35,
// };
// Object.prototype.getFullName = function () {
//   return `${this.name} ${this.surname}`;
// };
// console.log(obj2.getFullName());
