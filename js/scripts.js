//Business logic
var countAdd = function(number) {
  if (number % number2 === 0) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#countup").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var number2 = parseInt($("input#number2").val());
    var result = countAdd(number);

    $(".number").text(number)
      if (!result) {
        $(".not").text("not");
      } else {
        $(".not").text("");
      }


    $(".number2").text(number);
      if (!result) {
        $(".not").text("not");
      } else {
        $(".not").text("");
      }

    $("#result").show();

  });
});
