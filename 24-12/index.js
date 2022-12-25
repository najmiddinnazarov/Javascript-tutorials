// Generator function, module
// function* test() {}
// function *test() {}
// function* test() {
//   yield 1;
//   yield 2;
//   yield 3;
//   // return 3;
// }
// let generator = test();
// let sequence = [0, ...test()];
// console.log(sequence);
// for (const iterator of generator) {
//   console.log(iterator);
// }
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) yield i;
// }

// function* generateAlphaNum() {
//   // yield* generateSequence(48, 57);
//   for (let i = 48; i <= 57; i++) yield i;

//   // yield* generateSequence(65, 90);
//   for (let i = 65; i <= 90; i++) yield i;

//   // yield* generateSequence(97, 122);
//   for (let i = 97; i <= 122; i++) yield i;
// }

// let str = "";

// for (let code of generateAlphaNum()) {
//   str += String.fromCharCode(code);
// }

// alert(str); // 0..9A..Za..z

// function* gen() {
//   let result = yield "2 + 2 = ?";

//   console.log(result);
// }

// let generator = gen();

// let question = generator.next().value;
// console.log(question);
// generator.next(4);

// function* gen() {
//   let ask1 = yield "2 + 2 = ?";

//   console.log(ask1); // 4

//   let ask2 = yield "3 * 3 = ?";

//   console.log(ask2); // 9
// }

// let generator = gen();

// console.log(generator.next().value); // "2 + 2 = ?"

// console.log(generator.next(4).value); // "3 * 3 = ?"

// console.log(generator.next(9).done); // true

// function* gen() {
//   try {
//     let result = yield "2 + 2 = ?"; // (1)
//     console.log("Throw");
//   } catch (e) {
//     console.log(e); // shows the error
//   }
// }

// let generator = gen();

// let question = generator.next().value;

// generator.throw(new Error("The answer is not found in my database")); // (2)

// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const g = gen();

// g.next(); // { value: 1, done: false }
// g.return("foo"); // { value: "foo", done: true }
// g.next(); // { value: undefined, done: true }

// Modules

// import { test, test1 } from "./another.js";
// console.log(test());

// import test1, { test as test3 } from "./another.js";
// console.log(test1());
// console.log(test3());
// console.log(test());

// import "./another.js";
