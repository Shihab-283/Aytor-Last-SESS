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
  

  });