$(window).scroll(function () {
  $("ul.navigation li").toggleClass("naviscroll", $(this).scrollTop() > 200);
});
