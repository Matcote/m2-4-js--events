const main = document.querySelector(".main");
const mins = document.querySelector("#mins");
const hours = document.querySelector("#hours");
const secs = document.querySelector("#secs");
let date = new Date();
hours.innerHTML = date.getHours();
mins.innerHTML = date.getMinutes();
secs.innerHTML = date.getSeconds();

setInterval(function () {
  let date = new Date();
  hours.innerHTML = date.getHours();
  mins.innerHTML = date.getMinutes();
  secs.innerHTML = date.getSeconds();
}, 1000);
