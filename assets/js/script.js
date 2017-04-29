$(document).ready(function() {
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
