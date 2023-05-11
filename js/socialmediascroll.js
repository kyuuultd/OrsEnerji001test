$(window).scroll(function () {
    $("ul.socialmedia a").toggleClass("socialscroll a", $(this).scrollTop() > 200);
  });
  