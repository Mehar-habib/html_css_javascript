const plus = document.querySelector("#plus");
const reset = document.querySelector("#reset");
const minus = document.querySelector("#minus");
const output = document.querySelector("#score");
let score = 0;

plus.addEventListener("click", () => {
  score++;
  output.innerHTML = score;
  if (score >= 1) {
    output.style.color = "green";
  } else if (score == 0) {
    output.style.color = "white";
  }
});
minus.addEventListener("click", () => {
  score--;
  output.innerHTML = score;
  if (score < 1) {
    output.style.color = "red";
  } else if (score == 0) {
    output.style.color = "white";
  }
});

reset.addEventListener("click", () => {
  score = 0;
  output.innerHTML = score;
  output.style.color = "white";
});
