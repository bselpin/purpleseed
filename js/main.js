var menuLink = $('.burger');
var menu = $('.menu');
var close = $('.btn-close');
var navLink = $('.nav-btn');
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

var win_h = $(window).height() ;

$('.content').each(function(index){
    $(this).attr("data-index", win_h * index);
});



