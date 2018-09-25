$(function() {

	$('.projects .col').mouseenter(function() {
		$(this).find('.overlay').fadeIn();
	});

	$('.projects .col').mouseleave(function() {
		$(this).find('.overlay').fadeOut();
	});

});