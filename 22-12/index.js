// try/catch, Sinxron va Asinxron, Callback, Promise, Promise all, Promise race, async/await

// try {
//   console.log("Hi");
//   // console.log(number); // ReferenceError
//   throw new Error("Bu yerda xatolik bor!");
// } catch (err) {
//   console.log(err.stack);
//   console.log(err.name);
//   console.log(err.message);
// }

// let value = "Salom";
// value = "Salom atmen!";
// console.log(value);

// let value = "Salom";
// setTimeout(() => {
//   value = "Salom atmen";
// }, 1000);
// value += ", alik";
// console.log(value);

// let value;
// setTimeout(() => {
//   value = "Salom atmen";
// }, 1000);
// console.log(value);

// let value;
// function test(callback) {
//   setTimeout(() => {
//     callback((value = "Salom atmen"));
//   }, 1000);
// }
// test((user) => {
//   console.log(user);
// });

// let value;
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject((value = "Salom atmen!"));
//   }, 1000);
// });
// promise.catch((value) => console.log(value));

// Promise chaining
// let value;
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve((value = "Salom atmen!"));
//   }, 1000);
// });
// promise
//   .then(
//     (value) =>
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve((value = "Ikkinchi salom") + " Xayr");
//         }, 2000);
//       })
//   )
//   .then((value) => console.log(value));

// Promise all
// let all = Promise.all([]);
// let boolean = true;
// let promise1 = new Promise((res, rej) => {
//   if (boolean) res("true");
//   else rej("false");
// });

// let promise2 = new Promise((res, rej) => {
//   if (!boolean) res("true");
//   else rej("false");
// });

// let promise3 = new Promise((res, rej) => {
//   if (boolean) res("true");
//   else rej("false");
// });
// let all = Promise.all([promise1, promise2, promise3]);
// all.then((data) => console.log(data)).catch((error) => console.log(error));

// let boolean = true;
// let promise1 = new Promise((res, rej) => {
//   if (!boolean) res("true");
//   else rej("false");
// });

// let promise2 = new Promise((res, rej) => {
//   if (boolean) res("true");
//   else rej("false");
// });

// let promise3 = new Promise((res, rej) => {
//   if (boolean) res("true");
//   else rej("false");
// });
// let all = Promise.race([promise1, promise2, promise3]);
// all.then((data) => console.log(data)).catch((error) => console.log(error));

// async/await
// async function test() {
//   let boolean = false;
//   let promise = new Promise((res, rej) => {
//     if (boolean) res("true");
//     else rej("false");
//   });
//   let wait = await promise.catch((value) => console.log(value));
// }
// test();
