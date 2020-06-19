const howManyButtons = 20;
const main = document.querySelector(".main");

function buttonGen(num) {
  for (i = 1; i < num + 1; i++) {
    let btn = document.createElement("button");
    btn.innerText = `${i}`;
    btn.classList.add(`button${i}`);

    main.appendChild(btn);
    btn.addEventListener("click", green);
  }
}
buttonGen(howManyButtons);

function green() {
  let button = event.target.className;
  console.log(button);
  document.querySelector(`.${button}`).style.backgroundColor = "green";
}
