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











































      

     // New-product-slider-start




      // $('.new-product-slider').slick({
      //   slidesToShow:4,
      //   prevArrow:'<i class="fa-solid fa-chevron-left new-product-slider-arrow"></i>',
      //   nextArrow:'<i class="fa-solid fa-chevron-right new-product-slider-arrow"></i>',
      //   autoplay:true,
      //   resposive:[
      //     {
      //       breakpoint:1200,
      //       settings:{
      //         slidesToShow:4,
      //       }
      //     },
      //     {
      //       breakpoint:992,
      //       settings:{
      //         slidesToShow:4,
      //       }
      //     },
      //     {
      //       breakpoint:768,
      //       settings:{
      //         slidesToShow:2,
      //       }
      //     },
      //     {
      //       breakpoint:576,
      //       settings:{
      //         slidesToShow:2,
      //       }
      //     }
      //   ]
      // });




      // New-product-slider-end

























        // New-product-slider-copy-start






        $('.new-product-slider').slick({
          slidesToShow:4,
          prevArrow:'<i class="fa-solid fa-chevron-left new-product-slider-arrow"></i>',
          nextArrow:'<i class="fa-solid fa-chevron-right new-product-slider-arrow"></i>',
          autoplay:true,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });










        // New-product-slider-copy-end


























              // Countdown Activation
        $('#deals_countdown').countdown('2023/12/10', function(event) {
          var $this = $(this).html(event.strftime(''
            + '<div><h4>%D</h4><P>Days</P></div>  '
            +"<span>:</span>"
            + '<div><h4>%H</h4><P>Hours</P></div>  '
            +"<span>:</span>"
            + '<div><h4>%M</h4><P>Minute</P></div>  '
          + "<span>:</span>"
            + '<div><h4>%S</h4><P>Sec</P></div> '));
        });





















      //   Deals Slider Start

      // $('.deals_slider').slick({
      //     arrows:false,
      //     dots:true,
      //     slidesToShow: 2,
      //     resposive:[
      //       {
      //         breakpoint: 768,
      //         settings: {
      //           slidesToShow: 1,
      //         }
      //       }
      //     ]
          
      // })

      //   Deals Slider Start


















      // Deals Slider Copy Start


      $('.deals_slider').slick({
              arrows:false,
              dots:true,
              slidesToShow: 2,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });



      // Deals Slider Copy End



























      // Latest News Slider Start
      // $('.latest_slider').slick({
      //     arrows:false,
      //     dots: true,
      //     slidesToShow: 3,
      //     resposive: [
      //       {
      //         breakpoint: 1200,
      //         settings: {
      //           slidesToShow: 3,
      //         }
      //       },
      //       {
      //         breakpoint: 992,
      //         settings: {
      //           slidesToShow: 2,
      //         }
      //       },
      //       {
      //         breakpoint: 576,
      //         settings: {
      //           slidesToShow: 1,
      //         }
      //       }
      //     ]
      // })
      // Lastest News Slider End














      // Latest News Slider Copy Start



      $('.latest_slider').slick({
              arrows:false,
              dots: true,
              slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              // infinite: true,
              // dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });



      // Latest News Slider Copy End


















       // BackToTop Button
    $(window).on('scroll',function() {
      let scrollTop = $(window).scrollTop();

      if(scrollTop > 600){
           $('#backToTop').fadeIn(500);
      }else{
          $('#backToTop').fadeOut(500);
      }
  })
  $("#backToTop").on('click',function(){
      $('html, body').animate({
          scrollTop:0
      }, 200)
  })
  

  });

  // Actived Tooltipe

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  // Venobox

  new VenoBox();



