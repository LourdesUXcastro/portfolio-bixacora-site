console.log("Welcome to my Bixacora!");
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
const parallaxEls = document.querySelectorAll("[data-speed]");

window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
  for (const parallaxEl of parallaxEls) {
    const direction = parallaxEl.dataset.direction == "up" ? "-" : "";
    const transformY = this.pageYOffset * parallaxEl.dataset.speed;
  }
}
