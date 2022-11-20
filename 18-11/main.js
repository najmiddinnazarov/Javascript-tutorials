// while loops
// let i = 0;
// while (i < 5) {
//   console.log("True");
//   i++;
// }

// let k = 3;
// while (k) {
//   console.log(k);
//   k--;
// }

// let j = 3;
// while (j) console.log(j--);

// let i = 3;
// while (i > 0) {
//   console.log(i);
// } // Infinity loop

// ================== ================== //

// do while loops
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

// ================== ================== //

// for loops
// for (begin; condition; step) {
//   // ... loop body ...
// }
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// for (;;) {
//   // repeats without limits
// } // Infinity loop

// for (let i = 0; i < 10; i++) {
//   if (i % 2) {
//     console.log(i);
//   }
// }

// if (i > 5) {
// 	console.log(i);
// } else {
// 	continue;
// } // Syntax error!

// ================== ================== //

// Functions
// Function declaration
// let userName = "John";
// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable
//   let message = "Hello, " + userName;
//   console.log(message);
// }
// console.log(userName); // John before the function call
// showMessage();
// console.log(userName); // Bob, the value was modified by the function

// let userName = "John";
// function showMessage() {
//   let userName = "Bob"; // declare a local variable
//   let message = "Hello, " + userName; // Bob
//   console.log(message);
// }
// // the function will create and use its own userName
// showMessage();
// console.log(userName); // John, unchanged, the function did not access the outer variable

// function showMessage(from, text) {
//   // arguments: from, text
//   console.log(from + ": " + text);
// }
// showMessage("Ann", "Hello!"); // Ann: Hello! (*)
// showMessage("Ann", "What's up?"); // Ann: What's up? (**)

// function showMessage(from, text = "no text given") {
//   console.log(from + ": " + text);
// }
// showMessage("Ann"); // Ann: no text given

// Function expression

// let sayHi = function () {
//   console.log("Hello");
// };
// sayHi();

// Arrow funtion

let sum = (a, b) => {
  let result = a + b;
  return result;
};
console.log(sum(1, 2));
