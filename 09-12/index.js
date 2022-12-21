// let {prop : varName = default, ...rest} = object;

// const obj = {
//   name: "Laptop",
//   age: 4,
//   company: "Hp",
//   title: "Intel",
// };

// const { name: newName = "Asus", state = "USA", ...rest } = obj;
// console.log(newName);

// const obj = {
//   name: "Laptop",
//   extra: {
//     company: "Intel",
//     title: "hp",
//   },
// };

// const {
//   name,
//   extra: { company, title },
// } = obj;
// console.log(title);

// let [item1 = default, item2, ...rest] = array;
// const array = [, "bananas", "kiwi"];

// const [item1 = "peach", item2, ...fruits] = array;
// console.log(item2);

// const obj = {
//   item1: "apple",
//   item2: "kiwi",
//   item3: "peach",
// };
// function fruits({ item1, item2, item3 }) {
//   console.log(item1, item2, item3);
// }
// fruits(obj);

const now = new Date();
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getFullYear());
// console.log(now.getMonth() + 1);
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// let newHours = now.setHours(12, 34, 59);
// console.log(newHours);

// let today = `Today: ${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
// console.log(today);

// JSON = Javascript Object Notation

// const obj = {
//   name: "Najmiddin",
//   age: 22,
//   extra: {
//     country: "Uzbekistan",
//   },
// };

// let string = JSON.stringify(obj, ["name", "age", "extra", "country"], 2);
// console.log(string);

// console.log(JSON.parse(string));
