// for loops

for (let i = 0; i < 3; i++) {
  console.log(i);
}

let i = 0;
if (i < 3) {
  console.log(i);
  i++;
}

for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // error, no such variable

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i); // 1, then 3, 5, 7, 9
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) break;
  console.log(i); // 1, then 3, 5, 7, 9
}

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");
    if (!input) break outer; // (*)
  }
}
alert("Done!");

// =============  ============== //
// Switch

// switch(x) {
// 	case 'value1':
// 	...
// 	[break]
// 	case 'value2':
// 	...
// 	[break]
// 	// if (x === 'value1')
// 	// if (x === 'value2')
// 	default:
// 	...
// 	[break]
// 	}

let a = 2 + 2;
switch (a) {
  case 3:
    alert("Too small");
    break;
  case 4:
    alert("Exactly!");
    break;
  case 5:
    alert("Too large");
    break;
  default:
    alert("I don't know such values");
}
