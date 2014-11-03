//////////////////////////////////////////////////////////////////////////////////////////
//Nav
//////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function ($){
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