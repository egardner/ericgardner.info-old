// jQuery responsive menu nav
// from: http://codepen.io/bradfrost/pen/sHvaz

$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');
  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});

});

//flexslider initialization
$(window).load(function() {
	$('.flexslider').flexslider({
	animation: "fade",
	controlNav: false,
	directionNav: true,
	slideshowSpeed: 6000,
	animationSpeed: 600,
	touch: true
	});
});		
