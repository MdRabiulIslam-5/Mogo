$(function () {
    //preloader
    $(window).on('load', function (event) {
        $('.preloader').delay(1500).fadeOut(1500);
    });
    //===== Sticky
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".navigation").removeClass("sticky");
            $(".header-three .navigation img").attr("src", "images/logo-2.png");
        } else {
            $(".navigation").addClass("sticky");
            $(".header-three .navigation img").attr("src", "images/logo.png");
        }
    });
    //===== Mobile Menu
    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });
    var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');
    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
        });
        var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');
        subMenuToggler.on('click', function () {
            $(this).parent().parent().children('.sub-menu').slideToggle();
            return false
        });
    }
    /* counter start*/
    $('.counter').counterUp({
        delay: 10,
        time: 2500
    });
    //slick slider
    $('.slick_slide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '.right_arrow',
        prevArrow: '.left_arrow'
    });
    //SmoothScroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 200
    });
    //==== Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 800) {
            $('.back-to-top').fadeIn(300)
        } else {
            $('.back-to-top').fadeOut(300)
        }
    });
    //==== Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
});
