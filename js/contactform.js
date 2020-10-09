jQuery(document).ready(function ($) {
  $(".form").submit(function () {
    var str = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "http://u90941.test-handyhost.ru/MyPortfolio/contact.php",
      data: str,
      success: function (msg) {
        if (msg == "OK") {
          result = "<p>Thank you!</p>";
          $(".fields").hide();
        } else {
          result = msg;
        }
        $(".note").html(result);
      },
    });
    return false;
  });
});
