const elWrap = document.getElementById("wrap");
const elInput = document.getElementById("input");

// elWrap.addEventListener("copy", (e) => {
//   e.preventDefault();
// });

// elWrap.addEventListener("click", (e) => {
//   if (e.button == 0) console.log("Left clicked!");
//   if (e.button == 1) console.log("Middle clicked!");
//   if (e.button == 2) console.log("Right clicked!");
// });

// elWrap.addEventListener("click", (e) => {
//   // if (e.ctrlKey) console.log(e.ctrlKey, "Ctrl key clicked!");
//   // if (e.altKey) console.log(e.altKey, "Alt key clicked!");
//   // if (e.shiftKey) console.log(e.shiftKey, "Shift key clicked!");
// });

// button.addEventListener("click", (e) => {
//   if (e.ctrlKey && e.altKey) alert("ALT + CTRL => CLICKED...");
// });

// elInput.addEventListener("change", (e) => {
//   console.log((elInput.textContent += e.target.value));
// });

// elInput.addEventListener("keydown", (e) => {
//   console.log(`
//   Type: ${e.type},
//    Key: ${e.key},
//    Code: ${e.code}`);
//   // console.log(e.key);
// });

// elWrap.addEventListener("scroll", (e) => {
//   // console.log(e.target.clientHeight + e.target.scrollTop);
//   // console.log(e.target.scrollHeight);
//   // console.log(
//   //   e.target.scrollHeight < e.target.clientHeight + e.target.scrollTop + 50
//   // );
//   if (e.target.scrollHeight < e.target.clientHeight + e.target.scrollTop + 50)
//     elWrap.textContent += elWrap.textContent;
// });
