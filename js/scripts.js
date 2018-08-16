
//Business Logic
var numberPlace1 = ["I", "V", "X"]
var numberPlace10 = ["X", "L", "C"]
var numberPlace100 = ["C", "D", "M"]
var numberPlace1000 = ["M"]
var translateDigit = function(digit, place) {
  var counter = "";

  if (digit === "9") {
    return digit = place[0] + place[2];
  } else if (digit === "4") {
    return digit = place[0] + place[1];
  } else if (parseInt(digit) < 4) {
    for (var i = 0; i < parseInt(digit); i++) {
      counter += place[0];
    }
    return counter;
  } else if (5 < parseInt(digit) || parseInt(digit) < 9) {
    for (var i = 5; i < parseInt(digit); i++) {
      counter += place [0];
    }
    return place[1] + counter;
  } else {
    alert("Error");
  }
};


//   if digit between 5-8
//     digit place3 [1] + place3 [0]x(digit-5)
//   if digit 0-3 place3 [0]x(digit)
// }


//User Interface

var romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var number = $("#userInput").val().split("").reverse();
    $("#errorDisplay").text("");
    if(number > 3999 || number < 0) {
      $("#errorDisplay").text("Please enter a positive number below 4,000.");
    } else {
      for(var i = 0; i < number.length; i++) {
        var finalNumber = translateDigit(number[i], numberPlace1);
        console.log(finalNumber);
        $("#message").text(finalNumber);
      }
    }
    // console.log(number);
  });
});
