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
    autoplaySpeed: 3000,
    arrows: false,
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
  $(".subscribeButton").on("click", function(event){
    event.preventDefault();
    var email = $('#email').val(),
      emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailReg.test(email) || email == '') {
      alert('Please enter a valid email address.');
       return false;
  } else {
      alert('Thanks for subscribing!');
        return true;
  }
});
});
