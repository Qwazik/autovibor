/*===============================================
plugins
===============================================*/

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
(function($){
    $.fn.selectable = function(){
        var main = $(this);
        $(this).click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('acitve');
        })
    }
}(jQuery))
// Place any jQuery/helper plugins in here.

var mainSlider = $('#mainSlider').bxSlider({
    mode: 'fade',
    controls: false,

    auto: true,
    pause: 10000,
})

$('.main-slider__wrap .prev').click(function(){
    mainSlider.goToPrevSlide();
    console.log('obj');
})

$('.main-slider__wrap .next').click(function(){
    mainSlider.goToNextSlide();
    console.log('obj');
})

var awardsCarousel = $('#awardsSlider').bxSlider({
    controls: false,
    pager: false,
    minSlides: 5,
    maxSlides: 5,
    slideWidth: 255,
    slideMargin: 4
})

$('#awardsNav li a').click(function(){
    switch($(this).parent().attr('class')){
        case 'prev': awardsCarousel.goToPrevSlide()
        break
        case 'next': awardsCarousel.goToNextSlide()
        break
    }
    return false;
})

var partnersCarousel = $('#partnersSlider').bxSlider({
    controls: false,
    pager: false,
    minSlides: 5,
    maxSlides: 5,
    slideWidth: 255,
    slideMargin: 4
})

$('#partnersNav li a').click(function(){
    switch($(this).parent().attr('class')){
        case 'prev': partnersCarousel.goToPrevSlide()
        break
        case 'next': partnersCarousel.goToNextSlide()
        break
    }
    console.log('obj');
    return false;
})

$('#awardsSlider .fancybox-gallery').fancybox();

var cardCarousel = $('#cardSlider').bxSlider({
    controls: false
});

$('#cardNav li').click(function(){
    switch($(this).attr('class')){
        case 'prev': cardCarousel.goToPrevSlide()
        break
        case 'next': cardCarousel.goToNextSlide()
        break
    }
    return false;
})