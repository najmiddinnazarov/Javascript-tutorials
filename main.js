// var let const

var messageVar;
messageVar = "Hello";
messageVar = "world!";
console.log(messageVar);

let messageLet;
messageLet = "Hello";
messageLet = "world!";
console.log(messageLet);

const messageConst = "Hello";
messageConst = "world!"; // TypeError: Assignment to constant variable.
console.log(messageConst);

// ===================== ==================== //

// Data types

// Primitive and Reference
// Primitive data types
// string, number, boolean, null, undefined, bigInt, Symbol
// Reference data types
// Object => object, function, arr

let message = "hello"; // string
let n = 123; // number
let bigInt = 1234567890123456789012345678901234567890n; // bigInt
let check = true; // boolean
let empty = null; // null
let emptyValue = undefined; // undefined
let symbol = Symbol("id"); // symbol

let arr = []; // object

alert("Hello world!");
console.log("Hello world!");
prompt("Enter!");
confirm("It is true!");
