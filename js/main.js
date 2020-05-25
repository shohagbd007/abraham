(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        // MixItUp JS Code Here
        var mixer = mixitup('.portfolio-contents');
        // Owl Carousel JS Code Here
        // Team Carousel JS Here
        $("#team-carousel").owlCarousel({
            items: 1,
            loop: true,
            margin:30,
            autoplay: true,
            nav: false,
            dots: false,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            responsive:{
                0:{
                    items:1,
                    nav: false
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                }
            }
        });
        // Testimonial Carousel JS Here
        $("#testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            margin:30,
            autoplay: true,
            navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            responsive:{
                0:{
                    items:1,
                    nav: false
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                }
            }            
        });
        // Counter UP JS Here
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        // Sticky Nav JS Here
        $(window).on("scroll", function(){
            if($(window).scrollTop()){
                $('.header-top').addClass('sticky-nav');
            }
            else{
                $('.header-top').removeClass('sticky-nav');
            }
        });
        // Navbar Scroll Spy JS Here
        $('.navbar-nav a').on('click',function(e){
            e.preventDefault();
            var hash = this.hash;
            var headerH = '68';
            var position = $(hash).offset().top - headerH;
            $('html').animate({
                scrollTop: position
            }, 200);            
        });
        // Scroll Top JS Here
        $(window).on('scroll',function(){
            if($(this).scrollTop()>100){
                $(".scrolltopsec").fadeIn();
                $('.scrolltopsec').css('opacity','1');
            }
            else{
                $(".scrolltopsec").fadeOut();
            }
        });
        $(".scrolltopsec").on('click',function(){
            $("html, body").animate(
                {
                    scrollTop:0
                },
                200
            );
            
        });
        // Navbar Mobile Menu JS Here
        $("a.nav-link").on('click',function(){
            $(".navbar-collapse").removeClass("show");
        });
        // Typed JS Here
        var typed = new Typed('.typedtext', {
            strings: ["Abraham Kerri.", "A Web Designer.", "A Web Developer."],
            typeSpeed: 200,
            loop: true
        });
        // WOW JS Here
        new WOW().init(); 
    });    
    jQuery(window).load(function(){
    });
}(jQuery));