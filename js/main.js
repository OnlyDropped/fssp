$(function () {

  $('.select-style').styler();


  $('.slider').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 3600,
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