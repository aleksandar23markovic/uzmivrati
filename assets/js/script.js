$(document).ready(function() {
    /* slides = $('#crossfade');
    slides.find('li').hide().filter(':first').show();
    setInterval(slideshow, 3000); */
    $('.flexslider').flexslider({
    		animation: "slide"
  	});

  	$('.flex-next').on('click',function () {
    $('.flexslider').flexslider("play");
	});
	$('.flex-prev').on('click',function () {
	    $('.flexslider').flexslider("play");
	});
  
});

/* var slides;

function slideshow() {
    slides.find('li:first').fadeOut('slow').next().fadeIn('slow').end().appendTo('#crossfade');
} */