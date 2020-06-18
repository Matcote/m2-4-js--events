const balloon = document.querySelector("#balloon");

//declaring variables/settings
let balloonSize = 12;
balloon.style.fontSize = `${balloonSize}px`;
const RATE = 5;
const LIMIT = 75;

// setInterval(function () {
//   balloonSize += 10;
// }, 100);

//listen on the up and down arrows
//if up inflate balloon
//if down deflate balloon
// if balloon is bigger than x, BOOM

const handleKeydown = function (event) {
  const keyPress = event.key;
  if (keyPress === "ArrowUp") {
    balloonSize += 10;
    balloon.style.fontSize = `${balloonSize}px`;
  }
  if (keyPress === "ArrowDown") {
    balloonSize -= 10;
    balloon.style.fontSize = `${balloonSize}px`;
  }
  if (balloonSize > LIMIT) {
    console.log("explode");
    document.removeEventListener("keydown", handleKeydown);
    balloon.innerText = "💥";
    const explosion = setInterval(function () {
      balloonSize += 50;
      balloon.style.fontSize = `${balloonSize}px`;
      if (balloonSize > 1000) {
        balloon.style.opacity = 0;
        clearInterval(explosion);
      }
    }, 20);
  }
};

document.addEventListener("keydown", handleKeydown);
