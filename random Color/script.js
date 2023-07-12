const button = document.querySelector("#btn");
const body = document.querySelector("body");
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "gray",
  "lime",
  "purple",
  "aqua",
  "brown",
  "chartreuse",
  "orange",
  "darkorange",
  "darksalmon",
];

body.style.backgroundColor = "black";
button.addEventListener("click", () => {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
  body.style.transition = "1s linear";
});
