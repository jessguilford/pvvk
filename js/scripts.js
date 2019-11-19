// Add smooth scroll to any href that links to another section on the page
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000, 'easeOutSine');
});

// When the top of the window hits the top of an artist card frame, trigger a line animation
var artistCards = $('.artist-card');
$(window).scroll(function() {

  for (var i=0; i < artistCards.length; i++) {
    // Trigger animation when the top of the element is on the screen
    if (isElementOnScreen(artistCards[i])) {
      $(artistCards[i]).addClass('active');
    } else {
      $(artistCards[i]).removeClass('active');
    }
  }

});

function isElementOnScreen(el) {
  var pos = el.getBoundingClientRect();
  // pos.top represents the distance from the top of the element to the top of the window
  // pos.bottom represents the distance from the bottom of the element to the top of the window
  return (pos.top < window.innerHeight/2 && pos.bottom >= window.innerHeight*3/4);
}

// A handy bit of code for finding the path length of an svg
// var logo = document.querySelectorAll('#logo path');
//
// for (var i=0; i<logo.length; i++) {
//   console.log('letter ', i, 'is ', logo[i].getTotalLength());
// }
