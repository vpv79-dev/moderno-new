$(function(){

    $(".rate-star").rateYo({
      rating: 5,
      readOnly: true,
      starWidth: "12px"
    });
    $(".product-slider__inner").slick({
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
    });
    $(".js-range-slider").ionRangeSlider({
      type: "double",
      grid: false,
      min: 0,
      max: 1000,
      from: 0,
      to: 600,
      prefix: "$"
    });

    var mixer = mixitup('.products__inner-box');

});