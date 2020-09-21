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

let modalId = $('#image-gallery');

$(document).ready(function () {

  loadGallery(true, 'a.thumbnail');

  //This function disables buttons when needed
  function disableButtons(counter_max, counter_current) {
    $('#show-previous-image, #show-next-image')
      .show();
    if (counter_max === counter_current) {
      $('#show-next-image')
        .hide();
    } else if (counter_current === 1) {
      $('#show-previous-image')
        .hide();
    }
  }

  /**
   *
   * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
   * @param setClickAttr  Sets the attribute for the click handler.
   */

  function loadGallery(setIDs, setClickAttr) {
    let current_image,
      selector,
      counter = 0;

    $('#show-next-image, #show-previous-image')
      .click(function () {
        if ($(this)
          .attr('id') === 'show-previous-image') {
          current_image--;
        } else {
          current_image++;
        }

        selector = $('[data-image-id="' + current_image + '"]');
        updateGallery(selector);
      });

    function updateGallery(selector) {
      let $sel = selector;
      current_image = $sel.data('image-id');
      $('#image-gallery-title')
        .text($sel.data('title'));
      $('#image-gallery-image')
        .attr('src', $sel.data('image'));
      disableButtons(counter, $sel.data('image-id'));
    }

    if (setIDs == true) {
      $('[data-image-id]')
        .each(function () {
          counter++;
          $(this)
            .attr('data-image-id', counter);
        });
    }
    $(setClickAttr)
      .on('click', function () {
        updateGallery($(this));
      });
  }
});

// build key actions
$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
        $('#show-previous-image')
          .click();
      }
      break;

    case 39: // right
      if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
        $('#show-next-image')
          .click();
      }
      break;

    default:
      return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});
