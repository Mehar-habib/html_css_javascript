const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const session = document.querySelector("#session");

const displayTime = () => {
  let dataTime = new Date();
  let hrs = dataTime.getHours();
  let min = dataTime.getMinutes();
  let sec = dataTime.getSeconds();

  if (hrs >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }
  if (hrs > 12) {
    hrs = hrs - 12;
  }

  hours.innerHTML = hrs;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
};

setInterval(displayTime, 10);
