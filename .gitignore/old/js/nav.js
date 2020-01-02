// JavaScript Document

var dep1;
var dep2;

jQuery(function($){
	/* *********************** PC NAV ************************ */
	"use strict";
	var $openMenu = $(".cm-top-menu");
	// PC
	var $gnb = $("#gnb");
	var $gnbList = $("#gnb > ul");
	var $gnb_dep1 = $("#gnb > ul > li");
	var $gnb_dep2 = $("#gnb > ul > li .gnb-2dep");
	var $gnbBg = $(".gnb-overlay-bg");
	var $snb = $(".snb");
	// 모바일
	var $menuBtn = $("#header .nav-open-btn");
	var $gnbM = $("#gnbM");
	var $gnbMList = $gnbM.children("#navigation").children("li");
	var $gnbMBg = $('.gnb-overlay-bg-m');
	var menuState = false;
	
	// 모바일 gnb열린 후 창 크게했을때 스크롤바 생성
	$(window).resize(function  () {
		var win_width = $(window).outerWidth(); 
		if ( menuState  ) {
			if ( win_width > 1200 ) {
				$("body").css({'height':'auto', 'overflow':'auto'});
			}
		}
	});

	gnb_each_on();



	// gnb 각각메뉴fixed-header
	function gnb_each_on () {
		$gnbList.children("li").children("a").on("mouseenter focus",function  () {
			$gnbList.children("li").removeClass("on").children(".gnb-2dep").hide();
			$(this).parent("li").addClass("on").children(".gnb-2dep").show();
			$("#header").addClass("over");
		});
		
		$gnbList.on("mouseleave",gnb_return);
		$gnbList.find("a").last().on("focusout",gnb_return);
		
		function gnb_return () {
			if (!$gnb.find('*').is(':animated')) {
				$gnbList.children("li").removeClass("on").children(".gnb-2dep").hide();
			}
			if ( dep1 > 0 && dep2 ) {
				$gnbList.children("li").eq(dep1-1).addClass("active");
			}
			$("#header").removeClass("over");
		}
	}
	
	// gnb 2차 메뉴에 마우스 올렸을때 대메뉴 on
	$gnb_dep2.hover(function(){
		$(this).parent("li").addClass("on");
	},function  () {
		$gnb_dep1.removeClass("on");
	});

	// 서브메뉴에서 해당메뉴 on
	if ( dep1 > 0 && dep2 > 0) {
		$gnbList.children("li").eq(dep1-1).addClass("active");
		$gnbMList.eq(dep1-1).addClass("on");
		$snb.each(function  () {
			$(this).find("li").eq(dep2-1).addClass("on");
		});
	}
	
	/* *********************** MOBILE NAV ************************ */
	$menuBtn.click(function  () {
		if ( menuState ) {
			menuClose();
			menuState = false;
			$(this).removeClass("active");
		}else {
			menuOpen();
			menuState = true;
			$(this).addClass("active");
		}
		return false;
	});

	$gnbMBg.click(function  () {
		menuClose();
		menuState = false;
		$menuBtn.removeClass("active");
	});

	/* 메뉴열기 */ 
	function menuOpen () {
		$gnbM.addClass("open");
		$gnbMBg.fadeIn();
		$("body").css({'height':'auto', 'overflow':'hidden'});
	}
	/* 메뉴닫기 */ 
	function menuClose () {
		$gnbM.removeClass("open");
		$gnbMBg.hide();
		$("body").css({'height':'auto', 'overflow':'auto'});
	}
	
	/* GNB MOBILE 2DEPTH 클래스 붙이기  */ 
	$("#gnbM > ul > li:has('.gnb-2dep')").addClass("has-2dep");


	/* GNB MOBILE 2DEPTH 오픈 */ 
	$("#gnbM > ul > li:has('.gnb-2dep')").children("a").click(function(event){
		/* 2dep가 열려있을때 */		
		if ( $(this).parent("li").hasClass("active") ){
			$(this).parent("li").removeClass("active");
			$(this).children(".open-icon").hide();
			$(this).children(".close-icon").show();
			$(this).siblings(".gnb-2dep").slideUp(400);					
		}
		/* 2dep가 닫혀있을때 */ 
		else{	  
			$("#gnbM > ul > li").has(".gnb-2dep").each(function() {
				if ( $(this).hasClass("active") ){
					$(this).removeClass("active");
					$(this).find(".open-icon").hide();
					$(this).find(".close-icon").show();
					$(this).children(".gnb-2dep").slideUp(400);
				}
			});	
			$(this).parent("li").addClass("active");
			$(this).children(".close-icon").hide();
			$(this).children(".open-icon").show();
			$(this).siblings(".gnb-2dep").slideDown(400);
		}
		return false;
	});
	
	/*----------- PC, 모바일 공통 하위메뉴 ON & 열기 -----------*/
	
	$openMenu.find(".menu-location").each(function  () {
		// 클릭할때 펼치기
		$(this).find(".cur-location").click(function  () {
			$(this).toggleClass("open");
			$(this).siblings(".location-menu-con").toggle();

			return false;
		});
		// 2depth ON
		if ( $(this).is(".location1") ) {
			$(this).find(".location-menu-con").find("li").eq(dep1-1).addClass("on");
		}else {
			$(this).find(".location-menu-con").find("li").eq(dep2-1).addClass("on");
		}
	});
	
	$(".menu-location").mouseleave(function  () {
		if ( $(this).find(".location-menu-con").css("display") === "block" ) {
			$(this).find(".cur-location").removeClass("open");
			$(this).find(".location-menu-con").hide();
		}
	});

	
});

/*-------------헤더고정-------------*/

$(window).scroll(function() {
	"use strict";
	var scroll = $(window).scrollTop();
	//console.log(scroll);
	if (scroll >= 50) {
		//console.log('a');
		$("#header").addClass("fixed");
	} else {
		//console.log('a');
		$("#header").removeClass("fixed");
	}
});

/*-------------해당 컨텐츠 클릭시 부드럽게 이동-------------*/
jQuery(document)
	.ready(function($) {
	"use strict";
	$(".scroll").click(function(event){ 
		event.preventDefault(); 
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
});


function gnb_on(){
	"use strict";
	$("h1.logo > a").click(function(){ 
		var windHeight = $(window).height();
		$("html,body").animate({scrollTop:0},600);
		return false;
	});
}


$(document).ready(function(){
	"use strict";
	gnb_on();
});

