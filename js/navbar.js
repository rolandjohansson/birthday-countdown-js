// ======== Toggle Hamburger Menu ======== //

$(".menu-items a").click(function(){
  navToggle();
});

function navToggle() {
  var x = document.getElementById("topnav");
  if (x.className === "") {
    x.className = "dropped";
  } else {
    x.className = "";
  }
}

// ======== Fade on Scroll ======== //
const breakpoint = 960;

let oldWidth = $(window).width();
selectAlphaMode(oldWidth);

$(window).resize(function() {
  let width = $(window).width();
  if ((width < breakpoint && oldWidth >= breakpoint) || (width >= breakpoint && oldWidth < breakpoint)) {
    selectAlphaMode(width);
  }
  oldWidth = width;
});

function selectAlphaMode(width) {
  if (width < breakpoint) {
    $(document).scroll().off();
    setAlpha(1);
  } else {
    setAlpha(calcAlpha());
    $(document).scroll(function() {
      setAlpha(calcAlpha());
    });
  }
}

function setAlpha(alpha) {
    $("nav").css("background-color", "rgba(43,57,61," + alpha + ")");
}

function calcAlpha() {
  // Define var for opacity
  let alpha = 0;

  // Define var for distance scrolled from top in px
  let scroll = $(document).scrollTop();

  // At what px to start the fade in
  const fadeStart = 100;

  // At what px to stop the fade in
  const fadeStop = 200;

  // Define the length of the fade in
  const fadeLength = fadeStop - fadeStart;

  // Three cases
  if (scroll < fadeStart) {
    alpha = 0;
  }
  // Alpha will go from 0 to 1 when scroll goes between fade start and fade stop
  else if (scroll < fadeStop) {
    alpha = (scroll - fadeStart) / fadeLength;
  }
  else {
    alpha = 1;
  }

  return alpha;
}
