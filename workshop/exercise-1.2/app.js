// Exercise 1.2
// ------------
console.log("exercise 1.2");

const body = document.querySelector("body");
let result = document.querySelector(".result");
let time = document.querySelector("#time");
let random = Math.round(Math.random() * 5);
let yesNo = "false";
time.innerHTML = random;

let myFunction = function () {
  yesNo = "true";
  result.innerText = "You Win!";
};
body.addEventListener("click", myFunction);

let timeOut = setTimeout(function () {
  if (yesNo === "false") {
    result.innerText = "You Lose!";
    body.removeEventListener("click", myFunction);
  }
}, random * 1000);

const myVar = setInterval(() => {
  time.innerHTML = --random;
  if (random == 0) {
    clearInterval(myVar);
  }
}, 1000);
