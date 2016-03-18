$(document).ready(function(){

  $('.main-slider').slick({
    dots: true,
    autoplay: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 860,
      settings: {
        dots: false
      }
    }
    ]
  });

  $('.top-menu li a').click(function(){
    $('.top-menu li a').removeClass('yellow');
    $(this).addClass('yellow');
  });
//----------------------------------------------
$('.select-lang li a').click(function(){
  $(this).parent().insertBefore('.select-lang li:first-child');
  $('.select-lang li').siblings().hide();
});

$('.select-lang').hover(function(){
  $('.select-lang li').show().css('background-color', '#dcdf3c');
}, function(){
  $('.select-lang li').hide().css('background-color', 'transparent');
}
);

$(document).hover(function(){
  $('.select-lang li').css('background-color', 'transparent');
});

  //---------------------------------------------------

  if (Modernizr.mq('(max-width: 1232px)')) {
    $('.side-bar').hover(function(){
      $('.page-container').css('margin-right', '240px');
    },
    function(){
      $('.page-container').css('margin-right', '40px');
    });
  }

  $(window).resize(function(){
    if ($(window).width() > 1232) {
      $('.page-container').css('margin-right', '240px');
    } else {
      $('.page-container').css('margin-right', '40px');
    }
  });

  $(window).resize(function(){
    if ($(window).width() <= 1232) {
      $('.side-bar').hover(function(){
        $('.page-container').css('margin-right', '240px');
      },
      function(){
        $('.page-container').css('margin-right', '40px');
      });
    } else {
      $('.page-container').css('margin-right', '240px');
      $('.side-bar').hover(function(){
        $('.page-container').css('margin-right', '240px');
      });
    }
  });

  $('.inner-side-bar').hover(function() {
    /* Stuff to do when the mouse enters the element */
    $('#page-hover').removeClass('page-hover-out').addClass('page-hover-in')
  }, function() {
    /* Stuff to do when the mouse leaves the element */
    $('#page-hover').addClass('page-hover-out');
  });


  $('.nav5 li ul').hover(function(){
    $(this).parent().children(':first-child').toggleClass('menu-color');
  });

  /*'toggle' jQuery API is removed*/
  var flag = new Boolean(true);//Создаем логическую переменную (со значением true)
  $('.mob-submenu').hide(); 
  
  $('.mob-menu-btn').click(function() {

  if (flag) {//Если flag == true
    flag = false;//Меняем значение переменной flag
    func1.call(this);//Вызываем func1 с контекстом этой функции (т.е. в вызванной функции this = this этой функции)
  } else {//Если flag не равно true
    flag = true;
    func2.call(this);
  }
  return false;
});

  function func1() {$('.mob-submenu').show();
  $('.mob-menu-btn i').css('color', '#000');
  $('.mob-menu-btn').css('top', '-10px');
  $('body').css('overflow', 'hidden');
};

function func2() {$('.mob-submenu').slideUp('fast');
$('.mob-menu-btn i').css('color', '#dcdf3c');
$('.mob-menu-btn').css('top', '0');
$('body').css('overflow', 'auto');
};
/*end 'toggle' jQuery API is removed*/

/*move Table section*/

/*end move Table section*/
$( "#city" ).selectmenu({
  //icons: { button: "ui-icon-circle-triangle-s" },
  width: 540,
  icons: { button: "  ui-icon-triangle-2-n-s" }
});

$( "#curency" ).selectmenu({
  icons: { button: "  ui-icon-triangle-2-n-s" },
  width: 155
});


});
