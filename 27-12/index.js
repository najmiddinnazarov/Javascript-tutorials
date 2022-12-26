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
