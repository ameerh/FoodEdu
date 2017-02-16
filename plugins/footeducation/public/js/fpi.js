$(document).ready(function() {

	$('#foot-pain-identifier').fadeIn(1000);
	$('#fpi-feet > div > img').hide();
	$('#fpi-links ul').hide();
	$('#fpi-info').hide();
	$('#fpi-buttons-small > a').hide();

	$('#fpi-buttons > a').click(function() {
		var view = $(this).attr('href');
		$('#fpi-buttons').hide();
		$('#fpi-info').hide();
		$('#fpi-buttons-small > a').fadeIn();
		$(view).maphilight();
		$('#fpi-feet ' + view).fadeIn();
		return false;
	});
	
	$('#fpi-buttons-small > a').click(function() {
		var view = $(this).attr('href');
		$('#fpi-info').hide();
		$('#fpi-links ul').hide();
		$('#fpi-feet > div > div').hide();
		$(view).maphilight();
		$('#fpi-feet ' + view).fadeIn();
		return false;
	});

	$('#fpi-feet area').click(function() {
		var location = $(this).attr('alt');
		$('#fpi-links ul').hide();
		$('#fpi-info').fadeIn();
		$('#fpi-links #' + location).fadeIn();
		return false;
	});
});