$(document).ready(function() {
	if ($(window).width() <= 767) {
		$('#foot-pain-identifier').css('display', 'inline-block');
		$('#fpi-header').hide();
		$('#fpi-feet > div > img').hide();
		$('#fpi-links ul').hide();
		$('#fpi-info').hide();
		$('#fpi-buttons-small > a').hide();
	} else {
		$('#foot-pain-identifier').css('display', 'inline-block');
		$('#fpi-feet > div > img').hide();
		$('#fpi-links ul').hide();
		$('#fpi-info').hide();
		$('#fpi-buttons-small > a').hide();
	}


	$('#fpi-buttons > a').click(function() {
		if ($(window).width() <= 767) {
			var view = $(this).attr('href');
			var fpi = $("#foot-pain-identifier").offset().top;
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

	$('#foot-pain-identifier area').click(function() {
		if ($(window).width() <= 767) {
			var location = $(this).attr('alt');
			var fpi = $("#foot-pain-identifier").offset().top;
			$('#fpi-links ul').hide();
			$('#fpi-info').show();
			$('#fpi-links #' + location).show();
			$('#backToTop').show();
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
