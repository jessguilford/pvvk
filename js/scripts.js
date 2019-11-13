// var logo = document.querySelectorAll('#logo path');
//
// for (var i=0; i<logo.length; i++) {
//   console.log('letter ', i, 'is ', logo[i].getTotalLength());
// }

// Add smooth scroll to any href that links to another section on the page
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000, 'easeOutSine');
});
