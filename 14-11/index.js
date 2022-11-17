// if else

if (year == 2020) {
  console.log("That's correct!");
}

if (year < 2015) {
  alert("Too early...");
} else if (year > 2015) {
  alert("Too late");
} else {
  alert("Exactly!");
}

// ==================== ===================== //

// Ternary operator

// let result = condition ? value1 : value2;

let accessAllowed = age > 18 ? true : false;

// ==================== ===================== //

// Logical operator

console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

// ==================== ===================== //

// Nullish

// null and undefined => false

let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

console.log(height || 100); // 100
console.log(height ?? 100); // 0
