const timer = document.querySelector("#timer");
const countDown = new Date("Jan 10 2024 15:38:55").getTime();

const X = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDown - now;

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((distance % (1000 * 60 * 60)) / 1000);

  timer.innerHTML = `${d}d ${hrs}h ${min}m ${sec}s`;
  if (distance < 0) {
    clearInterval(X);
    timer.innerHTML = "Time's Up";
  }
});
