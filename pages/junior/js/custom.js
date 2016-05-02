	/* ==========================
	   PRE-LOADER
	=============================*/
	
	$(window).load(function() {
		"use strict";
		// will fade loading animation
		$("#object").delay(600).fadeOut(300);
		// will fade loading background					
		$("#loading").delay(1000).fadeOut(500);
	})   
	
	/* ==========================
	   VIDEO POPUP
	=============================*/

	$(document).ready(function() {
		$('.pop-up').magnificPopup({
			items: {
                       src: 'https://www.youtube.com/watch?v=KhkFmHeckeI',
       		  type: 'iframe' // this overrides default type
			},
			type: 'image' // this is default type
		});
	});
