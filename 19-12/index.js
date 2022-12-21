// OOP => Object Oriented Programming

// class MyClass {
//   hello() {
//     console.log("hi");
//   }
// }
// const newClass = new MyClass();
// newClass.hello();

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }
// let user = new User("John").sayHi();
// user.sayHi();

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short.");
//       return;
//     }
//     this._name = value;
//   }
// }

// let user = new User("Sasha");
// console.log(user.name);

// user = new User("Sasha");

// class User {
//   ["say" + "Hi"]() {
//     console.log("Hello");
//   }
//   ["Good" + "Bye"]() {
//     console.log("GoodBye");
//   }
// }

// new User().sayHi();
// new User().GoodBye();

// class User {
//   name = "John";
//   surname = "Doe";
//   sayHi() {
//     console.log(`Hello, ${this.surname}!`);
//   }
// }

// new User().sayHi();

// class Animals {
//   rabbit() {
//     console.log("Rabbit");
//   }
// }
// let animals = new Animals();
// animals.rabbit();

// class Dog extends Animals {
//   dog() {
//     console.log("Dog");
//   }
// }
// let dog = new Dog();
// dog.rabbit();

// class Animal {
//   constructor(name) {
//     console.log(name);
//   }
// }

// class Rabbit extends Animal {
//   constructor(...args) {
//     super(...args);
//   }
// }
// let animal1 = new Animal("Rabbit");
// let animal2 = new Rabbit("Dog");
// animal1;
// animal2;

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }
// }

// let rabbit = new Rabbit("White Rabbit", 10);
// console.log(rabbit.name);
// console.log(rabbit.earLength);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//   }
// }
// let animal = new Animal("White rabbit");
// let rabbit = new Rabbit("Black rabbit");
// console.log(rabbit.name);

// class Counter {
//   static num = 0;
//   static hi() {
//     console.log(++this.num);
//   }
// }
// let count1 = new Counter();
// let count2 = new Counter();
// let count3 = new Counter();
// Counter.hi();
// Counter.hi();
// Counter.hi();
// count2.hi();
// count2.hi();
// count3.hi();

// _name => public
// #name => private
// class Protected {
//   _name = "Najmiddin";
//   #secret = "Shut up!";
//   getPr() {
//     console.log(this.#secret);
//     console.log(this._name);
//   }
// }
// let pr = new Protected();
// pr.getPr();

// class Ar extends Array {}
// let array = new Ar();
// console.log(array.length);

// class Rabbit {}
// let rabbit = new Rabbit();

// alert(rabbit instanceof Rabbit);

// let sayHiMixin = {
//   sayHi() {
//     alert(`Hello ${this.name}`);
//   },
//   sayBye() {
//     alert(`Bye ${this.name}`);
//   },
// };
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.assign(User.prototype, sayHiMixin);

// new User("Dude").sayHi();
// new User("Dude").sayBye();
