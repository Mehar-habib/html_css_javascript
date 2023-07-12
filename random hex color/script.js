const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const hex_value = document.querySelector(".hex");
const cpy = document.querySelector(".myCopy");
const myHex = document.querySelector(".myHex");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

body.style.backgroundColor = "#000000";
hex_value.innerHTML = "#000000";

btn.addEventListener("click", () => {
  let hex_key = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hex.length);
    hex_key += hex[index];
    console.log(hex_key);
  }
  hex_value.innerHTML = hex_key;
  myHex.value = hex_key;
  body.style.background = hex_key;
  body.style.transition = "1s";
});

cpy.addEventListener("click", () => {
  myHex.select();
  myHex.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(myHex.value);
  alert("Copied Hex Color :" + myHex.value);
});
