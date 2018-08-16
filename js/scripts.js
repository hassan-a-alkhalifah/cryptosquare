
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
    return ""
  }
};

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
      var onePlace = translateDigit(number[0], numberPlace1);
      var tenPlace = translateDigit(number[1], numberPlace10);
      var hundredPlace = translateDigit(number[2], numberPlace100);
      var thousandPlace = translateDigit(number[3], numberPlace1000);
        // console.log(finalNumber);
        $("#message").text(thousandPlace + hundredPlace + tenPlace + onePlace);
      }
    // console.log(number);
  });
});
