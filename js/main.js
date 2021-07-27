$(function () {

  $('.select-style').styler();


  $('.slider').slick({
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-next.svg" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 360,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});