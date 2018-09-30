const breakpoint = 960;

checkViewportWidth();

$(window).resize(function() {
  checkViewportWidth();
});

function checkViewportWidth() {
  if ($(window).width() < breakpoint) {
    $("nav").css("background-color", "rgba(43,57,61,1)");
    console.log("Window narrower than 960px");
  } else {
    $("nav").css("background-color", "rgba(43,57,61,0)");
    fadeOnScroll();
    console.log("Window wider than 960px");
  }
}

function fadeOnScroll() {
  // Triggers on document scroll
  $(document).scroll(function () {

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

    // Set the CSS alpha
    $("nav").css("background-color", "rgba(43,57,61," + alpha + ")");
  })
}
