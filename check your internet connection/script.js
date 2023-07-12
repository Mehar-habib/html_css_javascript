const popup = document.querySelector(".popup");
const wifiIcon = document.querySelector(".icon i");
const popupTitle = document.querySelector(".popup .title");
const popupDesc = document.querySelector(".desc");
const reConnectBtn = document.querySelector(".reconnect");
let isOnline = true,
  intervalId,
  timer = 10;

const checkConnection = async () => {
  try {
    // try to fetch random data from the API. if the status code is b/w 200 and 300, the network connection is considered is online
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    isOnline = response.status >= 200 && response.status < 300;
  } catch (error) {
    isOnline = false; // if there is an error, the connection is considered offline
  }
  timer = 10;
  clearInterval(intervalId);
  handlePopup(isOnline);
};

const handlePopup = (status) => {
  if (status) {
    wifiIcon.className = "bi bi-wifi";
    popupTitle.innerText = "Restored Connection";
    popupDesc.innerText =
      "Your device is now successfully connected to the internet.";
    popup.classList.add("online");
    return setTimeout(() => {
      popup.classList.remove("show");
    }, 2000);
  }
  wifiIcon.className = "bi bi-wifi-off";
  popupTitle.innerText = "Lost Connection";
  popupDesc.innerHTML =
    "Your network is unavailable. We will attempt to reconnect you in <b>10</b> seconds</p> ";
  popup.className = "popup show";

  intervalId = setInterval(() => {
    // set an interval to decrease the timer by 1 every second
    timer--;
    if (timer === 0) {
      checkConnection(); // if the timer reaches 0, check the connection again
    }
    popup.querySelector(".desc b").innerText = timer;
  }, 1000);
};
// only if online is true,check connection status every 3 seconds
setInterval(() => isOnline && checkConnection(), 3000);
