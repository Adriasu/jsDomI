for (let i = 1; i <= 100; i++) {
  const button = document.createElement("button");
  document.querySelector("section").appendChild(button);
  button.innerHTML = i;
  button.style.width = "80px";
  button.style.height = "80px";
  i % 2 === 0
    ? (button.style.backgroundColor = "blue")
    : (button.style.backgroundColor = "pink");
  if (i % 5 === 0) {
    button.style.color = "green";
  }
}

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const spans = document.querySelectorAll("div > span");
for (let i = 0; i < spans.length; i++) {
  spans[i].style.color = colors[i]
}

