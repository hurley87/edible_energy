
//////////////////////////////////////////////////////////////////////////////////////////
//Nav
//////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function ($){
  
  $('#main-nav').css('background-', 'transparent'); 
  if ($(window).scrollTop()===0){
    $('#main-nav').removeClass('scrolled');
    $('#main-nav').css('background-', 'transparent'); 
  }
  else{
    $('#main-nav').addClass('scrolled');
     $('#main-nav').css('background-', 'transparent'); 
  }

  $(window).scroll(function(){
    if ($(window).scrollTop()===0){
      $('#main-nav').removeClass('scrolled');
      $('#main-nav').css('background-', 'transparent'); 
    }
    else{
      $('#main-nav').addClass('scrolled'); 
      $('#main-nav').css('background-color', '#FEFBEE');    
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

  $('nav h1').on('mouseenter', function() {
  		$(".ox").show( 1000 );
  		$(".ock").show(  1000 );
  });
  $('nav h1').on('mouseleave', function() {
  		$(".ox").hide( 1500 );
  		$(".ock").hide( 1500 );
  });
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
    $('.bg8').parallax("50%", 0.5);
    $('.bg9').parallax("50%", 0.5);
	}
}

//////////////////////////////////////////////////////////////////////////////////////////
//Special Fonts
//////////////////////////////////////////////////////////////////////////////////////////
  WebFontConfig = {
    google: { families: [ 'Quicksand::latin', 'Droid+Serif::latin', 'Montserrat::latin' ] }
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
    
    function animateSock1() {
      return TweenMax.to($('#cool1'), 2, {rotation: -10, onComplete: makeItRain, scale:1.1, ease:Back.easeOut});
    }
    function animateSock2() {
      return TweenMax.to($('#cool2'), 2, {rotation: -10, onComplete: makeItRain, scale:1.1, ease:Back.easeOut});
    }

    function makeItRain() {
      TweenMax.to($('#cool1'), 2, {rotation: 10, onComplete: makeItRain, scale:1.1, ease:Back.easeOut });
      TweenMax.to($('#cool2'), 2, {rotation: 10, onComplete: makeItRain, scale:1.1, ease:Back.easeOut });
     }

     setInterval(function() {
       animateSock1();
       animateSock2();
     }, 4000);

    $('#subscribe').waypoint({ 
      triggerOnce: true,
      handler: subList
    });
    $('#about').waypoint({
      triggerOnce: true,
      handler: coolList
    });

    function coolList() {
      return TweenMax.staggerTo(".cool-list", 2, {scale:1.1, delay:1, ease:Elastic.easeOut, force3D:true}, 1);
    }

    function subList() {
      return TweenMax.staggerFrom(".sub-list", 2, {scale:0.8, opacity:0.8, delay:1, ease:Elastic.easeOut, force3D:true}, 1);
    }

}); 