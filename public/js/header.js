$(document).ready(function() {
  console.log('ready');
  // console.log(window);

  $(document).on('scroll',function() {
    if (window.scrollY > 100) {
      console.log('header changed');
      console.log(window.scrollY);
    } else {
      console.log('og header');
    }
  })
});
