$(document).ready(function() {
  console.log('ready');
  // console.log(window);

  $(document).on('scroll',function() {
    if (window.innerWidth >= 768 ) {
      var toggleHeight = 10;
      if (window.scrollY > toggleHeight && !$('#title').hasClass('scrolled')) {
        $('#title').addClass('scrolled');
        console.log('added class');
      } else if (window.scrollY < toggleHeight && $('#title').hasClass('scrolled')) {
        $('#title').removeClass('scrolled');
        console.log('removed class');
      }
    }
  })
});
