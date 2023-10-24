// $(function(){
    
// })


$(document).ready(function(){


  // navbar-click-event-start

    $(".nav-2link").click(function(){
        $(".nav-cl-event").addClass("nav-cl-active");
      });


      $(".nav-evn-spn").click(function(){
        $(".nav-cl-event").removeClass("nav-cl-active");
      });

      // navbar-click-event-End


      // Banner-slider-slick-Start

      $('.banner-slider').slick({
        arrows:false,
        dots:true,
        fade:true,
      });



      // Banner-slider-slick-End

      // New-product-slider
      $('.new-product-slider').slick({
        slidesToShow:4,
        prevArrow:'<i class="fa-solid fa-chevron-left new-product-slider-arrow"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right new-product-slider-arrow"></i>',
        autoplay:true,
      });
  

  });

  // Actived Tooltipe

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))