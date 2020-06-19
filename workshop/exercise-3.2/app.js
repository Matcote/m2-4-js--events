const main = document.querySelector(".main");
let mins = 0;
const mins2 = document.querySelector("#mins");
let secs = 0;
const secs2 = document.querySelector("#secs");
let onOff = "False";
const button = document.querySelector("button");

secs2.innerText = "0";
mins2.innerText = "0";

button.addEventListener("click", function () {
  if (onOff === "False") {
    onOff = "True";
    button.innerText = "Stop";
  } else if (onOff === "True") {
    onOff = "False";
    button.innerText = "Start";
  }
});

setInterval(function () {
  if (onOff === "True") {
    secs++;
    secs2.innerText = secs;
    if (secs === 60) {
      secs = 0;
      mins = mins + 1;
      secs2.innerText = secs;
      mins2.innerText = mins;
    }
  }
}, 1000);
