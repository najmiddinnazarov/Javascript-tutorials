// Curry function, proxy
// function test(a, b) {
//   return a + b;
// }
// console.log(test(1, 2));

// const curry = (a) => (b) => (c) => a + b + c;

// console.log(curry(1)(2)(3));

// const getCalc = (type) => {
//   return (a) => (b) => (c) => {
//     switch (type) {
//       case "plus":
//         return a + b + c;
//         break;
//       case "minus":
//         return a - b - c;
//         break;
//       case "divide":
//         return a / b / c;
//         break;
//       case "multiply":
//         return a * b * c;
//         break;
//     }
//   };
// };
// const math = getCalc("multiply");
// console.log(math(1)(2)(3));

// Proxy
// let obj = {
//   name: "Najmiddin",
//   age: 40,
// };
// let proxy = new Proxy(obj, {
//   get(target, prop) {
//     if (prop in target) return target[prop];
//     return prop;
//   },
// });
// console.log(proxy.age);
// proxy.name = "Another proxy";
// console.log(obj.name);
// console.log(proxy.name);

// let arr = [7, 8, 9, 10];
// arr = new Proxy(arr, {
//   get(target, prop) {
//     if (prop in target) return target[prop];
//     return prop;
//   },
// });
// console.log(arr[1]);

// let numbers = [];

// numbers = new Proxy(numbers, {
//   set(target, prop, val) {
//     if (typeof val == "number") {
//       target[prop] = val;
//       return true;
//     } else {
//       return false;
//     }
//   },
// });

// numbers.push(1);
// numbers.push(2);
// numbers.push("2");
// console.log(numbers);

// let user = {
//   name: "John",
//   age: 30,
//   _password: "***",
// };

// user = new Proxy(user, {
//   ownKeys(target) {
//     return Object.keys(target).filter((key) => !key.startsWith("_"));
//   },
// });

// for (let key in user) console.log(key);

// console.log(Object.keys(user));
// console.log(Object.values(user));

// let range = {
//   start: 1,
//   end: 10,
// };

// range = new Proxy(range, {
//   has(target, prop) {
//     return prop >= target.start && prop <= target.end;
//     // 7 >= 1 && 7 <= 10
//   },
// });

// console.log(7 in range); // true
// console.log(50 in range); // false

// let user = {};

// Reflect.set(user, "name", "John");
// Reflect.set(user, "surname", "Doe");

// console.log(Reflect.get(user, "surname"));
