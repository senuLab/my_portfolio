


$(function(){
    $(window).on('scroll',function() {
        var scroll = $(window).scrollTop();
        var link = $('.js-link')
        var header = $(".js-header");
        var logo = $('.js-logo');
        var logo_dark = $('.js-logo--dark');
        var trigger_part = $('.js-trigger-part');
        var nav = $('.js-nav');

        if (scroll >= 50) {
            header.addClass("stickyadd__header");
            link.addClass("stickyadd__link");
            trigger_part.addClass("stickyadd__trigger-part");
            logo.addClass("stickyadd__logo--hide");
            logo_dark.removeClass("stickyadd__logo--hide");
            nav.addClass("stickyadd__nav");
        } else {
            header.removeClass("stickyadd__header");
            link.removeClass("stickyadd__link");
            trigger_part.removeClass("stickyadd__trigger-part");
            logo.removeClass("stickyadd__logo--hide");
            logo_dark.addClass("stickyadd__logo--hide");
            nav.removeClass("stickyadd__nav");
        }
    });


    $('.js-trigger').on('click', function() {
        var nav = $(".p-nav.js-nav");
        $(this).find(".js-trigger-part").toggleClass('active');
    
        if(nav.hasClass("active")){
            nav.fadeOut();
            $("body").css("overflow", "scroll");
        }
        else{
            nav.fadeIn();
            $("body").css("overflow", "hidden");
        }
        nav.toggleClass("active");
        return false;
    });

    $(".js-link").on("click",function(){
        var nav = $(".p-nav.js-nav");
        $("body").css("overflow", "scroll");
        
        if(nav.hasClass("active")){
            nav.fadeOut();
            nav.toggleClass("active");
            $(".js-trigger").find(".js-trigger-part").toggleClass('active');
        }
        return false;
    }); 
    
});