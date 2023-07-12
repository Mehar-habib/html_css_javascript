let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let H = window.innerHeight;
let W = window.innerWidth;

canvas.width = W;
canvas.height = H;
const fontSize = 16;
const columns = Math.floor(W / fontSize);
const drops = [];
for (let i = 0; i < columns; i++) {
  drops.push(0);
}
const str = "Javascript Hacking Effect";

function draw() {
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, W, H);
  context.fontSize = "700" + "px";
  context.fillStyle = "#00cc33";
  for (let i = 0; i < columns; i++) {
    const index = Math.floor(Math.random() * str.length);
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    context.fillText(str[index], x, y);
    if (y >= canvas.height && Math.random() > 0.99) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
draw();
setInterval(draw, 35);
