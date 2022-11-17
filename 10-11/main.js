// Type conversation

let value = true;
console.log(typeof value); // boolean
value = String(value); // now value is a string "true"
console.log(typeof value); // string

let str = "123";
console.log(typeof str); // string
let num = Number(str); // becomes a number 123 console.log(typeof num); // number

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false

// ====================== =========================== //

// Basic operators, maths

console.log("1" + 2); // "12"
console.log(2 + "1"); // "21"
console.log(6 / 2); // 3
console.log(6 * 2); // 12
console.log(6 % 5); // 1
console.log(6 - 2); // 4
console.log(2 ** 2); // 8
console.log(+true); // 1
console.log(+""); // 0

// ====================== =========================== //

// Comparasions

console.log(2 > 1); // true (correct)
console.log(2 == 1); // false (wrong)
console.log(2 != 1); // true (correct)
console.log("Z" > "A"); // true
console.log("Glow" > "Glee"); // true
console.log("Bee" > "Be"); // true
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log(null === undefined); // false
console.log(null == undefined); // true
console.log(null > 0); // (1) false
console.log(null == 0); // (2) false
console.log(null >= 0); // (3) true
