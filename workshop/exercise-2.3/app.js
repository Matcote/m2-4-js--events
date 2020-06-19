const main = document.querySelector(".main");

for (i = 1; i < 21; i++) {
  let button = document.createElement("button");
  button.className = `button${i}`;
  button.innerText = `${i}`;
  button.style.position = "absolute";
  button.style.left = `${Math.random() * 90}%`;
  button.style.top = `${Math.random() * 90}%`;
  main.appendChild(button);
  button.addEventListener("click", function () {
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
