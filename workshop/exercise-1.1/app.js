// Exercise 1.1
// ------------
console.log("exercise 1.1");
const body = document.querySelector("body");
const result = document.querySelector(".result");
let yesNo = "false";

body.addEventListener("click", function () {
  yesNo = "true";
});
setTimeout(function () {
  if (yesNo === "false") {
    result.innerText = "You Lose!";
    console.log("notclicked");
  } else if (yesNo === "true") {
    result.innerText = "You Win!";
    console.log("clicked");
  }
}, 1000);
