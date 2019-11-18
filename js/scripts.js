// Add smooth scroll to any href that links to another section on the page
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000, 'easeOutSine');
});

// When the top of the window hits the top of an artist card frame, trigger a line animation
$(window).scroll(function() {
  // var topOfWindow = $(window).scrollTop();
  var el = document.querySelector('#section-gabriel');
  var pos = el.getBoundingClientRect();

  // pos.top = the distance from the top of the element to the top of the window
  // pos.bottom = the distance from the bottom of the element to the top of the window
  // Trigger animation when the top of the element is 50% up the screen
  if (pos.top < window.innerHeight/2 && pos.bottom >= window.innerHeight*3/4) {
    $('#section-gabriel').addClass('active');
  } else if (pos.bottom < 0) {
    $('#section-gabriel').removeClass('active');
  } else {
    $('#section-gabriel').removeClass('active');
  }
});

// A handy bit of code for finding the path length of an svg
// var logo = document.querySelectorAll('#logo path');
//
// for (var i=0; i<logo.length; i++) {
//   console.log('letter ', i, 'is ', logo[i].getTotalLength());
// }
