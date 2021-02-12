$(function(){

    let form = $(".js-form");
    let link = $('.js-link')
    let header = $(".js-header");
    let logo = $('.js-logo');
    let logo_dark = $('.js-logo--dark');
    let trigger_part = $('.js-trigger-part');
    let nav = $('.js-nav');
    let boxTop = new Array;
    let current = -1;
    let nav_link_current = 'p-nav__link--current';

    let set = 160;

    if (window.matchMedia( "(max-width: 768px)" ).matches) {
        set = 160;
    } 
    else {
        set = 170;
    }

    $('.js-section').each(function (i) {
        boxTop[i] = $(this).offset().top;
    });

    function handleTouchMove(event) {
        event.preventDefault();
      }

    $(window).on('scroll',function() {
        let scroll = $(window).scrollTop();
        let nav = $('.js-nav');

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

        if ($(this).scrollTop() > 100) {
            $('.p-to-top').fadeIn();
        } else {
            $('.p-to-top').fadeOut();
        }

        if(scroll < 200){
            $('.p-nav__link').removeClass(nav_link_current);
        }

        if(scroll > 200 && scroll < 250){
            changeBox(0);
            current = -1;
        }

        if(scroll > 250){
            for (var i = boxTop.length - 1; i >= 0; i--) {
                if (scroll > boxTop[i] - set ) {
                changeBox(i);
                break;
            }
            }
        }
    });


    $('.js-trigger').on('click', function() {
        let nav = $(".p-nav.js-nav");
        $(this).find(".js-trigger-part").toggleClass('active');
    
        if(nav.hasClass("active")){
            nav.fadeOut();
            $("html").css("overflow", "hidden");
            $("body").css("overflow", "scroll");
            document.removeEventListener('touchmove', handleTouchMove, {passive: false});
        }
        else{
            nav.fadeIn();
            $("html").css("overflow", "hidden");
            $("body").css("overflow", "hidden");
            document.addEventListener('touchmove', handleTouchMove, {passive: false});
        }
        nav.toggleClass("active");
        return false;
    });

    $(".js-link, .js-btn, .js-to-top, .js-logo-link").on("click",function(){
        let nav = $(".p-nav.js-nav");
        
        if(nav.hasClass("active")){
            nav.fadeOut();
            nav.toggleClass("active");
            $(".js-trigger").find(".js-trigger-part").toggleClass('active');
        }

        $("html").css("overflow", "scroll");
        $('body').css('overflow', 'scroll');
        document.removeEventListener('touchmove', handleTouchMove, {passive: false});

        let scroll = $(window).scrollTop();
        let header = 0;

        if (scroll < 50) {
            header = $(".l-header").innerHeight() - 20; 
        }
        else{
            header = $(".l-header").innerHeight(); 
        }


        let id = $(this).attr("href");
        let position = $(id).offset().top - header;
    
        $('body,html').animate({
            scrollTop: position
        }, 600);

        return false;
    }); 
        

    const changeBox = function(secNum) {
        if (secNum != current) {
            current = secNum;
            secNum2 = secNum + 1;
            $('.p-nav__link').removeClass(nav_link_current);

            if (current == 0) {
                $('.js-about-link').addClass(nav_link_current);
            } 
            else if (current == 1) {
                $('.js-skill-link').addClass(nav_link_current);
            } 
            else if (current == 2) {
                $('.js-work-link').addClass(nav_link_current);
            }
            else if (current == 3) {
                $('.js-contact-link').addClass(nav_link_current);
            }
        }
    }; 

    form.submit(function(e) { 
        $.ajax({ 
            url: form.attr('action'), 
            data: form.serialize(), 
            type: "POST", 
            dataType: "xml", 
            statusCode: { 
                0: function() { 
                //送信に成功したときの処理 
                form.slideUp();
                $(".js-success").slideDown();
            }, 
            200: function() { 
                //送信に失敗したときの処理 
                form.slideUp();
                $(".js-error").slideDown();
            } 
        } 
    });
    return false; 
    }); 
    
});