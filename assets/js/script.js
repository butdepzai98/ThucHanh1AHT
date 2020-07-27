// -----------------------------Slide---------------------------------------

$(document).ready(function () {
    $('.slide-news').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
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

    // -----------------------------Menu---------------------------------------
    $(window).on("scroll", function () {
      if(document.body.scrollTop > 119 || document.documentElement.scrollTop > 119)
      {
        $('nav').addClass('nav-fix');

        //ScrollTop
        $('.scroll-top').addClass('bottom-100');
      }
      else
      {
        $('nav').removeClass('nav-fix');
        $('.menu-nav').removeClass('d-block t-82px');

        //ScrollTop
        $('.scroll-top').removeClass('bottom-100');
      }
    });

    //Menu button
    $('button.icon-nav').on("click", function () {
      if(document.body.scrollTop > 119 || document.documentElement.scrollTop > 119)
      {
        $('.menu-nav').toggleClass('d-block t-82px');
      }
      else
      {
        $('.menu-nav').toggleClass('d-block');
      }
      
    });
});

//Cuộn lên có gia tốc
function scrollToTop (duration) {
  // cancel if already on top
  if (document.scrollingElement.scrollTop === 0) return;

  const totalScrollDistance = document.scrollingElement.scrollTop;
  let scrollY = totalScrollDistance, oldTimestamp = null;

  function step (newTimestamp) {
      if (oldTimestamp !== null) {
          // if duration is 0 scrollY will be -Infinity
          scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
          if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
          document.scrollingElement.scrollTop = scrollY;
      }
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}


