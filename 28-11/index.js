// Garbage collection, Object methods "this", Constructor, operator "new", Optional chaining '?.', Symbol type, Object Destructuring, Spread Syntax

// Garbage collection
// const obj = {};
// delete obj;

// this
// let user = {
//   name: "John",
//   age: 30,
// };

// user.sayHi = function () {
//   console.log("Hello!");
// };

// user.sayHi(); // Hello!

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     console.log(this.name);
//   },
// };

// user.sayHi(); // John

// console.log(this);

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     console.log(user.name); // leads to an error
//   },
// };

// let admin = user;
// user = null; // overwrite to make things obvious

// admin.sayHi(); // TypeError: Cannot read property 'name' of null

// function sayHi() {
//   console.log(this.name);
// }
// sayHi();

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   console.log(this.name);
// }

// // use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

// // these calls have different this
// // "this" inside the function is the object "before the dot"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin["f"]();

// let user = {
//   firstName: "Ilya",
//   sayHi() {
//     let arrow = () => console.log(this.firstName);
//     arrow();
//   },
// };

// user.sayHi(); // Ilya

// Constructor
// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// console.log(user.name); // Jack
// console.log(user.isAdmin); // false

// function User() {
//   console.log(new.target);
// }

// // without "new":
// User(); // undefined

// // with "new":
// new User(); // function User { ... }

// function BigUser() {
//   this.name = "John";

//   return { name: "Godzilla" };
// }

// console.log(new BigUser().name); // Godzilla, got that object

// function SmallUser() {
//   this.name = "John";

//   return; // <-- returns this
// }

// alert(new SmallUser().name); // John

// Option chaining

// let user = {
//   name: "Liza",
//   age: 21,
//   // address: { country: "England", city: "London" },
// };

// console.log(user.address.city); // Error !!!

// console.log(user?.address?.city); // undefined

// let user = {
//   name: "John",
//   age: 16,
//   sayHello() {
//     console.log("hey!");
//   },
// };

// // user.sayHello(); // error !!! unday metod yo'q

// // console.log(user.sayHello?.()); // undefined

// user.sayHello(); // 'hey!'

// Symbol type

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// let obj = {
//   [id2]: "Computer",
// };
// console.log(obj[id2]);

// Object Destructuring

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// const { title, width, height } = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200

// let options = {
//   title: "Menu",
//   width: 700,
// };

// let { width = 100, height = 200, title } = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["Cake", "Donut"],
//   extra: true,
// };

// let {
//   size: { width, height },
//   items: [item1, item2],
//   title = "Menu",
// } = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200
// console.log(item1); // Cake
// console.log(item2); // Donut

// Spread Syntax

// const user = {
//   name: "Alex",
//   address: "15th Park Avenue",
//   age: 43,
// };

// const clone = { ...user };
// console.log(clone);

// const user = {
//   name: "Alex",
//   address: "15th Park Avenue",
//   age: 43,
// };

// const updatedUser = { ...user, salary: 12345 };

// console.log(updatedUser);
