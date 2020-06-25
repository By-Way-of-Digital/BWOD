$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 700 ) { 
            $("#service__image img").addClass("addScroll" );
        } else {
            $("#service__image").removeClass("addScroll" );
        }               
    });

    $('.testimonial__holder').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });


//      const menuBtn = document.getElementById('responsive');
//      const getMenu = document.getElementById('res');

// menuBtn.addEventListener('click', () => {
//     getMenu.classList.add(' res')
// });

      AOS.init();
})


