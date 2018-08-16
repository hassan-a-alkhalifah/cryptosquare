
//Business Logic
var numberPlace1 = ["I", "V", "X"]
var numberPlace10 = ["X", "L", "C"]
var numberPlace100 = ["C", "D", "M"]
var numberPlace1000 = ["M"]


var translateDigit = function(digit, place) {
  console.log(digit + " " + typeof place);
  if (digit === "9") {
    return digit = place[0] + place[2];
  } else {
    alert("Error");
  }
};


//   if digit between 5-8
//     digit place3 [1] + place3 [0]x(digit-5)
//   if digit === 4
//     show place 3 [0] + place3 [1]
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
