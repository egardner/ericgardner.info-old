// Initialise FlexSlider for Carousels
$(window).load(function() {
	$('.flexslider').flexslider({
	animation: "fade",
	controlNav: false,
	directionNav: true,
	slideshowSpeed: 5000,
	animationSpeed: 600,
	touch: true
	});
});

// Initialize Skrollr for parallax
( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            Debugging - Log the current scroll position.
            console.log(data.curTop);
        }
    });
} )( jQuery );