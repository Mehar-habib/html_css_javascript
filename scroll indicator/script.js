window.onscroll = function () {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  //   The scrollTop property sets or returns the number of pixels an element's content is scrolled vertically.
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = Math.floor((winScroll / height) * 100);
  document.getElementById("myBar").style.width = scrolled + "%";
};
