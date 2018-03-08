//Business logic


$(document).ready(function() {
  $("form#countup").submit(function(event) {
    event.preventDefault();
    debugger;
    var number = parseInt($("input#number").val());
    var number2 = parseInt($("input#number2").val());
    var multiples = [];

      for (var i = number2; i <= number; i += number2) {
        if (number % i === 0) {
          multiples.push(i);
        };

    $('#result').text(multiples);



  };
 });
});
