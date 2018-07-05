/*
var slideIndex = 1;
showSlides(slideIndex);
*/
var dropdown = document.getElementsByClassName("dropdowncontent");
$( document ).ready(function() {
    for(i = 0; i < dropdown.length; i++){
        dropdown[i].style.display = 'none';
    }
    /*
    $('.dropdown').hover(function(){
        console.log('entered');
        dropdown[0].style.display = 'block'
    }, function(){
        console.log('lefted');
        dropdown[0].style.display = 'none';
    });
    */
});

function showDropdown(n){
    console.log('entered');
    dropdown[n-1].style.display = 'block'
}

function hideDropdown(n){
    console.log('lefted');
    dropdown[n-1].style.display = 'none';
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    console.log("slides: ",slides);
    console.log("dots: ",dots);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    $('.slideimg').fadeIn();
    dots[slideIndex - 1].className += " active";

    /*
    //check if text for slide exists
    if ($('#spotlight-text')) {
        changeSlideText(n, slides.length);
    }
    */
}

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 750, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
/*
function changeSlideText(n, slidesLength) {
    
    for (i = 1; i <= slidesLength; i++) {
        //console.log(($('#spotlight-text > #' + i.toString())).text())
        document.getElementById('spotlight-text-' +i.toString()).style.display = 'none';
    }
    document.getElementById('spotlight-text-' + n.toString()).style.display = 'block';
}

*/