// select the container and heart element  from the DOM
const image = document.querySelector(".container");
const heartIcon = document.querySelector(".container .heart");

// Add the double-click event listener to the image
image.addEventListener("dblclick", (e) => {
  // calculate the x and y position of the double-click event
  let xValue = e.clientX - e.target.offsetLeft;
  let yValue = e.clientY - e.target.offsetTop;

  // set the position of the heart element using the X and Y values
  heartIcon.style.left = `${xValue}px`;
  heartIcon.style.top = `${yValue}px`;
  // add the active class to the heart
  heartIcon.classList.add("active");

  //   remove the active class after 1 seconds
  setTimeout(() => {
    heartIcon.classList.remove("active");
  }, 1000);
});
