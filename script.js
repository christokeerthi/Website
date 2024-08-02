// Window scroll
$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();
  $("body").toggleClass("fixed-header", scrollTop >= 80);
});

// Document Ready
$(document).ready(function () {
  // Typing Animation
  new Typed("#type-it", {
    strings: ["Developer", "Designer"],
    typeSpeed: 100,
    loop: true,
    backSpeed: 50, // Adjust backspeed as needed
    startDelay: 1000, // Adjust start delay as needed
  });

  // One Page Scroll
  $.scrollIt(); // Ensure jQuery ScrollIt plugin is included
});
