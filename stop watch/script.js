let seconds = "00";
let tens = "00";
const OutputSeconds = document.getElementById("second");
const OutputTens = document.getElementById("tens");
const buttonStart = document.querySelector(".btn-start");
const buttonStop = document.querySelector(".btn-stop");
const buttonReset = document.querySelector(".btn-reset");
let Interval;

buttonStart.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10); // millisecond 10 = 0.01 second
});

buttonStop.addEventListener("click", () => {
  clearInterval(Interval);
});

buttonReset.addEventListener("click", () => {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  OutputSeconds.innerHTML = seconds;
  OutputTens.innerHTML = tens;
});

function startTimer() {
  tens++;
  if (tens <= 9) {
    OutputTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    OutputTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    OutputSeconds.innerHTML = "0" + seconds;
    tens = 0;
    OutputTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    OutputSeconds.innerHTML = seconds;
  }
}
