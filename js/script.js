$(document).ready(function () {
  $(".header__buger").click(function (event) {
    $(".header__buger,.header__menu,.header").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
