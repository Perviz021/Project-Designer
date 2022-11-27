$(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    responsiveClass: true,
    //responsive carousel
    responsive: {
      //if width is more than 0px
      0: {
        items: 1,
      },
      //if width is more than 1200px
      1200: {
        items: 2,
      },
    },
  });
});
