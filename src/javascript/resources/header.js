$(document).ready(function() {

  // Event listener checks y-axis on window scroll; adjusts header as such
  $(document).on('scroll',function() {
    if (window.innerWidth >= 768 ) {
      var toggleHeight = 75;
      if (window.scrollY > toggleHeight && !$('nav').hasClass('scrolled')) {
        $('nav').addClass('scrolled');
        $('.state').addClass('scrolled-padding');
        $('#search').addClass('scrolled-search');
      } else if (window.scrollY < toggleHeight && $('nav').hasClass('scrolled')) {
        $('nav').removeClass('scrolled');
        $('.state').removeClass('scrolled-padding');
        $('#search').removeClass('scrolled-search');
      }
    }
  });

});
