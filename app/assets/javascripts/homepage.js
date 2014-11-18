
//////////////////////////////////////////////////////////////////////////////////////////
//Nav
//////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function ($){
  animateOpening('.red-dot1', 1000);
  animateOpening('.red-dot2', 1000);
  animateOpening('.red-dot3', 1000);
  animateOpening('.red-dot4', 1000);

  animateOpening('.red-dot5', 2500);
  animateOpening('.red-dot6', 2500);
  

  function animateOpening(div, time) {
      setTimeout(function(){
        $(div).animate({
        'background-color': '#F04E31',
        'height': '180px',
        'width': '180px',
        'border-radius': '90px',
        'opacity': 1,
        'font-size': '1.4em',
       ' padding-top': '95px'
      }, 1000);
      }, time);
  }


  setTimeout(function() {
    $('.learn-more').animate({
        'padding': '8px',
        'font-size': '1.1em'
    }, 1000);
  }, 3000);

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
  $('.red-dot1').addClass('fadeIn1');
    // $('#socks').waypoint(function() {
    //   $('#sock1').fadeIn(500);
    //   $('#sock2').fadeIn(100);
    //   $('#sock3').fadeIn(1500);
    //   $('#sock4').fadeIn(2000);
    // });
    $('#one').hide();
    $('#two').hide();
    $('#three').hide();

    $('#subscribe').waypoint(function() {
        $('#one').show(500);
        $('#two').show(1000);
        $('#three').show(1500);
    });

    for(var i =0; i < 5; i++) {
      $('.sock-list').eq(i).css({'opacity':0});
    }

    $('#sock-start').waypoint(function() {
      
      for(var i =0; i < 5; i++) {
      $('.sock-list').eq(i).css({'opacity':0});
    }
    $('.sock-list').eq(0).animate({"opacity": 1}, 500);
    $('.sock-list').eq(1).animate({"opacity": 1}, 1000);
    $('.sock-list').eq(2).animate({"opacity": 1}, 1500);
    $('.sock-list').eq(3).animate({"opacity": 1}, 2000);
    $('.sock-list').eq(4).animate({"opacity": 1}, 2500);
    
    });
}); 