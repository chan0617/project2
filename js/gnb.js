$(function(){
    var firstmenu=$('.menu-tit'),
    firstMenuItem=$('.menu-item');
  
    firstmenu.on('mouseenter', function(){
        firstmenu.find('.dropdown-1').hide(); 
        firstMenuItem.removeClass('active');
        $(this).find('.menu-item').addClass('active');
        $(this).find('.dropdown-1').slideDown();
    })
    firstmenu.on('mouseleave', function(){
      firstmenu.find('.dropdown-1').hide();
      firstMenuItem.removeClass('active');
    })


    var swiper = new Swiper(".mySwiper", {
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
          spaceBetween: 0,
        },
      },
    });
});

$(document).ready(function(){
  $('#all-menu').click(function(){
    $(".menu-shadow").toggleClass('active');
    $(this).toggleClass('active');
    $('.gnb-left,.gnb-right').toggleClass('active');
  });
});

