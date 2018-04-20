$(function() {
  var i = 0;
  $('.addToCart').on('click', function(event) {
    event.preventDefault();
    i++;
    $('.itemCount').empty();
    $('.itemCount').append(i);
  });
  $(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1049,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 626,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});
  });
});
