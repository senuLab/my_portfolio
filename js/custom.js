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

        if ($(this).scrollTop() > 100) {
            $('.p-to-top').fadeIn();
        } else {
            $('.p-to-top').fadeOut();
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

    $(".js-link, .js-btn").on("click",function(){
        var nav = $(".p-nav.js-nav");
        $("body").css("overflow", "scroll");
        
        if(nav.hasClass("active")){
            nav.fadeOut();
            nav.toggleClass("active");
            $(".js-trigger").find(".js-trigger-part").toggleClass('active');
        }

        $('body').css('position', 'static');
        $('body').css('overflow', 'scroll');
        $('body').css('overflow-y', 'scroll');

        var scroll = $(window).scrollTop();
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
        }, 500);

        return false;
    }); 


  //トップへスクロール
  $('.js-to-top').on("click",function () {

    let header = $(".l-header").innerHeight(); 

    let id = $(this).attr("href");
    let position = $(id).offset().top - header;
    
    $('body,html').animate({
      scrollTop: position
    }, 500);
    return false;
  });

    const randomness = 100, // 振れ幅（例：90の場合は0〜90の値になる）
		  threshold = 200; // 元のサイズ
	const randomness02 = 100, // 振れ幅（例：90の場合は0〜90の値になる）
		  threshold02 = 200; // 元のサイズ


	// 流体アニメーション関数を定義
	/* const fluid = function () {

		// animate関数を使用
		$('.p-about__img-wrap').animate({
			borderTopLeftRadius: String(Math.round((Math.random() * randomness02 + threshold02)) + 'px'),
			borderTopRightRadius: String(Math.round((Math.random() * randomness + threshold)) + 'px'),
			borderBottomLeftRadius: String(Math.round((Math.random() * randomness + threshold)) + 'px'),
			borderBottomRightRadius: String(Math.round((Math.random() * randomness02 + threshold02)) + 'px'),
		}, {
			duration: 900,　//形が変わる速さ
			complete: fluid　//繰り返し
		});
	} */

    var set = 200;//ウインドウ上部からどれぐらいの位置で変化させるか
    var boxTop = new Array;
    var current = -1;
    //各要素の位置
    //position-nowは場所を取得したい対象の要素に付ける
        

    const changeBox = function(secNum) {
        if (secNum != current) {
          current = secNum;
          secNum2 = secNum + 1;//以下にクラス付与したい要素名と付与したいクラス名
          $('.nav-global li a').removeClass('link-current');
    
          //位置によって個別に処理をしたい場合　
          if (current == 0) {
            $('#top_link_js').addClass('link-current');
            // 現在地がsection1の場合の処理
          } else if (current == 1) {
            $('#about_link_js').addClass('link-current');
            // 現在地がsection2の場合の処理
          } else if (current == 2) {
            // 現在地がsection3の場合の処理
            $('#business_link_js').addClass('link-current');
          }
          else if (current == 3) {
            // 現在地がsection4の場合の処理
            $('#access_link_js').addClass('link-current');
          }
          else if (current == 4) {
            // 現在地がsection4の場合の処理
            $('#contact_link_js').addClass('link-current');
          }
    
        }
      };   
      
      let form = $(".js-form");

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