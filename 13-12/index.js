// Recursion function, lexical environment, closure
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// function recursion(num) {
//   console.log(num);
//   if (num === 1) return;
//   else return recursion(num - 1);
// }
// recursion(5);

// function pow(x, y) {
//   let result = 1;
//   for (let i = 0; i < y; i++) {
//     result *= x;
//   }
//   return result;
// }
// console.log(pow(3, 3));

// function pow(x, y) {
//   if (y === 1) return x;
//   else return x * pow(x, y - 1);
// }
// console.log(pow(2, 3));

// let b = 2;
// function test(a) {
//   let b = 3;
//   return b;
// }
// console.log(test(10));
