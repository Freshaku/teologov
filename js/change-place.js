var scrollTop = 0;
$(window).on("scroll", function(){
	var scrollNow = $(window).scrollTop(); // текущая прокрутка
	if (scrollNow > scrollTop) {
		console.log('прокрутили вниз');
    // $('.teoperson').css( "top", "111rem" );
    // $('.teoperson').css( "left", "40rem" );
		$('.header').css("position", "absolute");
		$('.teoperson').css( "animation", "move-teo-b 10s 1" );
		$('.teoperson').css( "animation-iteration-count", "1" );
		$('.bg__mask_person').css( "animation", "move-bg-b 10s 1" );
		$('.bg__mask_person').css( "animation-iteration-count", "1" );
		// $('.bg__mask_person').css( "top", "21.9rem" );
		$('.about_pic').css( "animation", "move-b 10s 1" );
		$('.about_pic').css( "animation-iteration-count", "1" );
		// $('.about_pic').css( "top", "30rem" );
		// $('.about_pic').css( "left", "40rem" );
		$('.b5').css( "top", "49rem" );
		$('.b12').css( "top", "26rem" );
		$('.b13').css( "top", "34rem" );
		setTimeout(() => {
		$('.b5').css( "position", "static" );
		$('.b12').css(  "position", "static"  );
		$('.b13').css(  "position", "static"  );
		}, 2000);
		
	} else {
		console.log('прокрутили вверх');
		$('.header').css("position", "fixed");
    // $('.teoperson').css( "top", "27.813rem" );
    // $('.teoperson').css( "left", "22.875rem" );
		$('.teoperson').css( "animation", "move-teo-t 10s 1" );
		$('.teoperson').css( "animation-iteration-count", "1" );
		$('.bg__mask_person').css( "animation", "move-bg-t 10s 1" );
		$('.bg__mask_person').css( "animation-iteration-count", "1" );
		// $('.bg__mask_person').css( "top", "-2.5rem" );
		// $('.about_pic').css( "top", "14rem" );
		// $('.about_pic').css( "left", "7.5rem" );
		$('.about_pic').css( "animation", "move-t 10s 1" );
		$('.about_pic').css( "animation-iteration-count", "1" );
		$('.b5').css( "top", "-10rem" );
		$('.b12').css( "top", "-7rem" );
		$('.b13').css( "top", "-5rem" );
		// setTimeout(() => {
			$('.b5').css( "position", "absolute" );
			$('.b12').css(  "position", "absolute"  );
			$('.b13').css(  "position", "absolute"  );
		// }, 2000);
	}
	scrollTop = scrollNow;
})


