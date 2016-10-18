$(document).ready(function() {
  console.log('ready');
  // console.log(window);

  $(document).on('scroll',function() {
    if (window.innerWidth >= 768 ) {
      var toggleHeight = 75;
      if (window.scrollY > toggleHeight && !$('nav').hasClass('scrolled')) {
        // $('#title').addClass('scrolled');
        $('nav').addClass('scrolled');
        $('.state').addClass('scrolled-padding');
        console.log('added class');
      } else if (window.scrollY < toggleHeight && $('nav').hasClass('scrolled')) {
        // $('#title').removeClass('scrolled');
        $('nav').removeClass('scrolled');
        $('.state').removeClass('scrolled-padding');
        console.log('removed class');
      }
    }
  })
});
