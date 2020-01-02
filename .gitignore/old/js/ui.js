// JavaScript Document

function program_slider(){
	"use strict";
	$(".program_list").bxSlider({
		slideWidth:330,
		slideMargin: 19,
		minSlides: 1,
		maxSlides: 3,
		moveSlides: 1,
		auto: true,
		autoHover: false,
		pause: 4000,
		speed:1000,
		pager:false
	});
}

$(document).ready(function(){
	"use strict";
	$(".clearfix li").hover(function(){
		$(this).addClass('active');
	}, function(){
		$(this).removeClass('active');
	});
});


$(document).ready(function(){
	"use strict";
	program_slider();
});