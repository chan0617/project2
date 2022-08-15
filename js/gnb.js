$(function(){
     //변수선언
    var firstmenu=$('.menu-tit'),
    firstMenuItem=$('.menu-item');
  
    //아래 this는 변수선택자 2댑스 내려감
    firstmenu.on('mouseenter', function(){
        firstmenu.find('.dropdown-1').hide(); // 초기화
        firstMenuItem.removeClass('active');
        $(this).find('.menu-item').addClass('active');
        $(this).find('.dropdown-1').slideDown();
    })
    //2댑스 올라감
    firstmenu.on('mouseleave', function(){
      firstmenu.find('.dropdown-1').hide();
      firstMenuItem.removeClass('active');
    })


    var swiper = new Swiper(".mySwiper", {
      // autoHeight : true,
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        800: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
});

/**
 * $(function(){});
 */

$(document).ready(function(){
  $('#all-menu').click(function(){
    $(this).toggleClass('active');
    $('.gnb-left,.gnb-right').toggleClass('active');
  })
});