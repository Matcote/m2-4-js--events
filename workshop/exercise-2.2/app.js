const main = document.querySelector(".main");

for (i = 0; i < 20; i++) {
  let button = document.createElement("button");
  button.className = `button${i + 1}`;
  button.innerText = `${i + 1}`;
  main.appendChild(button);
  button.addEventListener("click", function toggle() {
    if (
      document.querySelector(`.${button.className}`).style.backgroundColor !==
      "green"
    ) {
      document.querySelector(`.${button.className}`).style.backgroundColor =
        "green";
    } else {
      document.querySelector(`.${button.className}`).style.backgroundColor =
        "red";
    }
  });
}
