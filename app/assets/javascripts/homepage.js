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
	}
}

//////////////////////////////////////////////////////////////////////////////////////////
//Special Fonts
//////////////////////////////////////////////////////////////////////////////////////////
  WebFontConfig = {
    google: { families: [ 'Quicksand::latin', 'Droid+Serif::latin' ] }
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
  $('.sub-right').hide();
    $('#subscribe').waypoint(function() {
      $('.sub-right').show(1000);
    });
}); 