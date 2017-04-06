$(document).ready(function() {
    $('.fpi-images').hide();
	if ($(window).width() <= 767) {
		$('#foot-pain-identifier').css('display', 'inline-block');
		$('#fpi-header').hide();
		$('#fpi-feet > div > img').hide();
		$('#fpi-links ul').hide();
		$('#fpi-info').hide();
		$('#fpi-buttons-small > a').hide();
		$('.fpi-instructions .step-two').hide();
		$('.fpi-instructions.step-three').hide();
	} else {
		$('#foot-pain-identifier').css('display', 'inline-block');
		$('#fpi-feet > div > img').hide();
		$('#fpi-links ul').hide();
		$('#fpi-info').hide();
		$('.fpi-instructions').hide();
		$('#fpi-buttons-small > a').hide();
	}


	$('#fpi-buttons > a').click(function() {
        $('.fpi-images').hide();
		if ($(window).width() <= 767) {
			var view = $(this).attr('href');
			var fpi = $("#foot-pain-identifier").offset().top;
			$('.fpi-instructions.step-one-two').css('top', '62px');
			$('.fpi-instructions .step-one').hide();
			$('.fpi-instructions .step-two').show();
			$('#fpi-buttons').hide();
			$('#fpi-info').hide();
			$('#fpi-buttons-small > a').fadeIn();
			$(view).maphilight();
			$('#fpi-feet ' + view).fadeIn();
			$("body,html,document").animate({scrollTop: fpi}, 'slow')
			return false;
		} else {
			var view = $(this).attr('href');
			$('#fpi-buttons').hide();
			$('#fpi-info').hide();
			$('#fpi-buttons-small > a').fadeIn();
			$(view).maphilight();
			$('#fpi-feet ' + view).fadeIn();
			return false;
		}
	});

	$('#fpi-buttons-small > a').click(function() {
        $('.fpi-images').hide();
		if ($(window).width() <= 767) {
			var view = $(this).attr('href');
			$('#fpi-info').hide();
			$('#fpi-links ul').hide();
			$('#fpi-feet > div > div').hide();
			$(view).maphilight();
			$('#fpi-feet ' + view).fadeIn();
			return false;
		} else {
			var view = $(this).attr('href');
			$('#fpi-info').hide();
			$('#fpi-links ul').hide();
			$('#fpi-feet > div > div').hide();
			$(view).maphilight();
			$('#fpi-feet ' + view).fadeIn();
			return false;
		}
	});

	$('#foot-pain-identifier polygon').click(function() {
		if ($(window).width() <= 767) {
			var location = $(this).attr('alt');
			var fpi = $("#foot-pain-identifier").offset().top;
			$('#fpi-links ul').hide();
			$('#fpi-links #' + location).show();
			$('#backToTop').show();
			$('.fpi-instructions.step-three').show();
			var backToTop = $('#backToTop').offset().top;
			$("body,html,document").delay(400).animate({scrollTop: backToTop - 10}, 'slow')
			return false;
		} else {
			var location = $(this).attr('alt');
			$('#fpi-links ul').hide();
			$('#fpi-info').fadeIn();
			$('#fpi-links #' + location).fadeIn();
			return false;
		}
	});

	$('#backToTop a').click(function() {
		var fpi = $("#foot-pain-identifier").offset().top;
		$("body,html,document").animate({scrollTop: fpi}, 'slow')
		return false;
	});
});
