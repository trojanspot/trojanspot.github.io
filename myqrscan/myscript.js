//Disable right mouse click, copy, paste
$(document).ready(function () {
	//Disable full page
	$("body").on("contextmenu", function (e) {
		return false;
	});

	//Disable full page
	$('body').bind('cut copy paste', function (e) {
		e.preventDefault();
	});
});