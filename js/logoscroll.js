$(window).scroll(function () {
  $('a.logo').toggleClass('scrologo', $(this).scrollTop() > 200);
});
