var scrollTop = 0;
$(window).on("scroll", function(){
	var $body = $('body');
	var position = $body.scrollTop(),
			block_position = $('.header').offset().top; 
	var scrollNow = $(window).scrollTop(); // текущая прокрутка
	if (scrollNow > scrollTop) {
		console.log('прокрутили вниз');
		$('.header').css("position", "absolute");
		$('.header').css("background-color", "transparent");
		$('.teoperson').css( "animation", "move-teo-b 10s 1" );
		$('.teoperson').css( "animation-iteration-count", "1" );
		$('.bg__mask_person').css( "animation", "move-bg-b 10s 1" );
		$('.bg__mask_person').css( "animation-iteration-count", "1" );
		$('.about_pic').css( "animation", "move-b 10s 1" );
		$('.about_pic').css( "animation-iteration-count", "1" );
		$('.b5').css( "top", "49rem" );
		$('.b12').css( "top", "26rem" );
		$('.b13').css( "top", "34rem" );
		setTimeout(() => {
		$('.b5').css( "position", "static" );
		$('.b12').css(  "position", "static"  );
		$('.b13').css(  "position", "static"  );
		}, 5000);
		
	} else {
		console.log('прокрутили вверх');
		$('.header').css("position", "fixed");
		$('.header').css("background-color", "#1D1E21");
		$('.teoperson').css( "animation", "move-teo-t 10s 1" );
		$('.teoperson').css( "animation-iteration-count", "1" );
		$('.bg__mask_person').css( "animation", "move-bg-t 10s 1" );
		$('.bg__mask_person').css( "animation-iteration-count", "1" );
		$('.about_pic').css( "animation", "move-t 10s 1" );
		$('.about_pic').css( "animation-iteration-count", "1" );
		$('.b5').css( "top", "-10rem" );
		$('.b12').css( "top", "-7rem" );
		$('.b13').css( "top", "-5rem" );
	}
	
	if(position === block_position) {
		console.log('на месте');
		$('.header').css("background-color", "transparent");
	}
	
	scrollTop = scrollNow;
})


