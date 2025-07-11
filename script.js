window.addEventListener('load', () => {
  // Prevent browser from restoring scroll position
  history.scrollRestoration = 'manual';

  // Scroll to top
  window.scrollTo(0, 0);
});

window.addEventListener('load', function () {
  window.scrollTo(0, 0);
});

let slide = document.getElementById("slider")


function slideopen() {
  slide.style.left = "0px"
  document.body.style.overflow = 'hidden';
  slide.style.boxShadow="0px 0px 15px black"
}

function slideclose() {
  slide.style.left = "-50%"
  document.body.style.overflow = 'auto';
}






