'use strict';

$(function () {
	$(document).spinload();
	$(document).placeholder();
	$(window).bind("load resize", function (event) {
		$(".interface").css({"margin": $(window).height() + "px 0 0 0"});
	});
	$(window).bind("load resize scroll", function (event) {
		$(".interface").effect();
	});
});
