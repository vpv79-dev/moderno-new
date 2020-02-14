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

    var mixer = mixitup('.products__inner-box');

});