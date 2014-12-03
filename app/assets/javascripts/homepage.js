
//////////////////////////////////////////////////////////////////////////////////////////
//Nav
//////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function ($){

  if ($(window).scrollTop()===0){
    $('#main-nav').removeClass('scrolled');
  }
  else{
    $('#main-nav').addClass('scrolled');
  }

  $(window).scroll(function(){
    if ($(window).scrollTop()===0){
      $('#main-nav').removeClass('scrolled');
 
    }
    else{
      $('#main-nav').addClass('scrolled'); 
      $('#main-nav').css('background-color', '#0a3542');    
    }
  });
  $('.scroll-link').click(function(){
      $.scrollTo( $(this).attr("href"), {
			duration: 1000			
		});
	return false;
  });

  $('.ock').show(2000).hide(2000);
  $('.ox').show(2000).hide(2000);
  $('h1').slideDown(2000);
});

//////////////////////////////////////////////////////////////////////////////////////////
//Detect iPhone, iPod, iPad and remove or ativate parallax
//////////////////////////////////////////////////////////////////////////////////////////
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(window).bind('load', function () {
	parallaxInit();						  
});

function parallaxInit() {
	detectMobile = isMobile.any();
	if (detectMobile == null) {
		$('.bg1').parallax("50%", 0.5);
		$('.bg2').parallax("50%", 0.5);
		$('.bg3').parallax("50%", 0.5);
		$('.bg4').parallax("50%", 0.5);
		$('.bg5').parallax("50%", 0.5);
    // $('.bg8').parallax("100%", 1);
    $('.bg9').parallax("50%", 0.5);
    $('.coolpic').parallax("50%", 0.5);
	}
}

//////////////////////////////////////////////////////////////////////////////////////////
//Special Fonts
//////////////////////////////////////////////////////////////////////////////////////////
  WebFontConfig = {
    google: { families: ['Raleway::latin', 'Montserrat::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

//////////////////////////////////////////////////////////////////////////////////////////
//waypoints
//////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {


    setInterval(function() {
       $('.open-arrow').animate({'bottom': '-10px'}).animate({'bottom': '10px'});
    }, 2000);
    
    function animateSock1(sock) {
      return TweenMax.to($(sock), 1, {rotation: -10, onComplete: makeItRain, opacity:0.8,  ease:Back.easeOut});
    }
    function animateSock2(sock) {
      return TweenMax.to($(sock), 1, {rotation: -10, onComplete: makeItRain, opacity:0.8,  ease:Back.easeOut});
    }

    function makeItRain() {
      TweenMax.to($('#cool1'), 2, {rotation: 10, onComplete: makeItRain, opacity:0.8,  ease:Back.easeOut });
      TweenMax.to($('#cool2'), 2, {rotation: 10, onComplete: makeItRain, opacity:0.8,  ease:Back.easeOut });
     }

     setInterval(function() {
       animateSock1('#cool1');
       animateSock2('#cool2');
     }, 2000);

    // $('#subscribe').waypoint({ 
    //   triggerOnce: true,
    //   handler: subList
    // });
    // $('#about').waypoint({
    //   triggerOnce: true,
    //   handler: coolList
    // });

    // function coolList() {
    //   return $('.bg8').parallax("100%", 1);
    // }

    // function subList() {
    //   return TweenMax.staggerFrom(".sub-list", 1, {scale: 1.1,  opacity:0.8, delay:1, ease:Elastic.easeOut, force3D:true}, 1);
    // }

}); 