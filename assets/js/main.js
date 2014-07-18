// jQuery responsive menu nav
// from: http://codepen.io/bradfrost/pen/sHvaz

$(document).ready(function() {

	// initialize skrollr
//	window.onload = function() {
//		skrollr.init();
//   	}


});

//flexslider initialization
$(window).load(function() {
	$('.flexslider').flexslider({
	animation: "fade",
	controlNav: false,
	directionNav: true,
	slideshowSpeed: 6000,
	animationSpeed: 600,
	touch: true,

	start: function(slider) {
               slider.removeClass('loading');
           	}

	});
});		
