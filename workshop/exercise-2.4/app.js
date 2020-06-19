const main = document.querySelector(".main");
const startButton = document.querySelector(".start");
const howManyBalls = Math.round(Math.random() * 8) + 2;
const timer = document.querySelector(".timer");
let time = 5;
let result = [];

startButton.addEventListener("click", start);

let clickerFunction = function (event) {
  //console.log(event.target);
  if (event.target.style.backgroundColor !== "green") {
    event.target.style.backgroundColor = "green";
    result.push(event.target);
  } else {
    event.target.style.backgroundColor = "red";
    result.pop();
  }
};

function start() {
  startButton.style.display = "none";
  timer.innerText = time;
  const myInterval = setInterval(() => {
    time--;
    timer.innerText = time;
    console.log(result);
    console.log(howManyBalls);
    if (result.length === howManyBalls) {
      timer.innerText = "You Win!";
      clearInterval(myInterval);
      console.log("you win!");
      for (i = 1; i < howManyBalls; i++) {
        let button = document.querySelector(`.button${i}`);
        button.removeEventListener("click", clickerFunction);
      }
    } else if (time === 0) {
      clearInterval(myInterval);
      timer.innerText = "You Lose!";
      for (i = 1; i < howManyBalls; i++) {
        let button = document.querySelector(`.button${i}`);
        button.removeEventListener("click", clickerFunction);
      }
    }
  }, 1000);

  for (i = 1; i < howManyBalls + 1; i++) {
    let button = document.createElement("button");
    button.className = `button${i}`;
    button.innerText = `${i}`;
    button.style.position = "absolute";
    button.style.left = `${10 + Math.random() * 70}vw`;
    button.style.top = `${25 + Math.random() * 53}vh`;
    main.appendChild(button);
    button.addEventListener("click", clickerFunction);
  }
}
