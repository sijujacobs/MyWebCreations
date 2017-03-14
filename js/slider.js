
$(function() {
    //console.log( "SlideJS ready!" );

	var sliderContainer = $('#sliderContainer');
	var slider = $(sliderContainer).find('.slider');
	var sliderWapper = $(sliderContainer).find('.sliderWrapper');
	var slides = $(sliderContainer).find('.slide');
	var intervalTimer = null, timeOutTimer = null;
	var slideCount = $(slides).length;
	var slideWidth = $(slides).width();
	var slideHeight = $(slides).height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$(slider).css({ width: slideWidth, height: slideHeight });
	$(sliderWapper).css({ width: sliderUlWidth, marginLeft: - slideWidth });
	$(slides).last().prependTo(sliderWapper);
	$('div.prevButton').click(function () {
		stopAnimation();
		moveRight();  
		timeOutTimer = setTimeout(function(){startAnimation()}, 5000);
	});//End of preButtonClick
	
	$('div.nextButton').click(function () {
		stopAnimation();
		moveLeft();
		timeOutTimer = setTimeout(function(){startAnimation()}, 5000);
	}); //End of nextButtonClick
	
	function moveRight() {
		$(sliderWapper).animate({
			left: + slideWidth
		}, 500, function () {
			$(sliderContainer).find('li.slide:last-child').prependTo(sliderWapper);
			$(sliderWapper).css('left', '');
		});
	}//End of moveRight
	
	function moveLeft() {
		$(sliderWapper).animate({
			left: - slideWidth
		}, 500, function () {
			$(sliderContainer).find('li.slide:first-child').appendTo(sliderWapper);
			$(sliderWapper).css('left', '');
		});
	}//End of moveRight//right
	
	function startAnimation(){
		intervalTimer = setInterval(function() {moveLeft()}, 7000);
	}//End of stopAnimation
	
	function stopAnimation(){
		clearTimeout(intervalTimer);
		intervalTimer = null;
		clearTimeout(timeOutTimer);
		timeOutTimer = null;
	}//End of stopAnimation
	
	startAnimation();
});//End of DocReady