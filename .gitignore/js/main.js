$(document).ready(function() {
    var menuLink = $('.burger');
    var menu = $('.menu');
    var close = $('.btn-close');
    var navLink = $('ul li a');
    var content = $('.content');

    menuLink.click(function() {
        menu.toggleClass('menu_active');
    });

    close.click(function() {
        menu.toggleClass('menu_active');
    });

    navLink.on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');        
        var top = $(target).offset().top;        
        $('html, body').animate({scrollTop: top}, 500);
        menu.toggleClass('menu_active');
    });
});

$(window).ready(function(){
	var max = 300; //100% 투명할때의 스크롤 값
	$(window).scroll(function(){
		var scrollPX = $(this).scrollTop();
		if( scrollPX < max ) {
			$("#bg").css({"opacity": (max-scrollPX)/max });
		}
        else{
			$("#bg").css({"opacity": 0});
		}	
	});
});

var win_h = $(window).height() ;

$('.content').each(function(index){
    $(this).attr("data-index", win_h * index);
});
$('.content').on("mousewheel", function(e){
    var sectionPos=parseInt($(this).attr("data-index"));
    if(e.originalEvent.wheelDelta >=0) {
        $("html,body").stop().animate({scrollTop:sectionPos-win_h},500);
    return false;
    } else if (e.originalEvent.wheelDelta<0) {
        $("html,body").stop().animate({scrollTop:sectionPos+win_h},500);
    return false;
    }
});
