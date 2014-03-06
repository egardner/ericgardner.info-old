// jQuery responsive menu nav
// from: http://codepen.io/bradfrost/pen/sHvaz

$(document).ready(function() {


	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    
	    
	}




	// responsive menu scripts
	$('body').addClass('js');
  	var $menu = $('#menu'),
    $menulink = $('.menu-link');
  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});

	// initialize skrollr
	var s = skrollr.init({          
            mobileCheck: function() {
                //hack - forces mobile version to be off
                return false;
            }
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
