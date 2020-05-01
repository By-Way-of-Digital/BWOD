$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 700 ) { 
            $("#service__image img").addClass("addScroll" );
        } else {
            $("#service__image").removeClass("addScroll" );
        }               
    });
})