
//Business Logic
var lowercaseString = function(string) {
  return string.split(/[\W]/).join("").toLowerCase();
}

var finalString = [];

var stringsOf5 = function(string) {
  console.log("string")
  for (i=4; i<string.length; i += 5) {
    finalString.push(string.slice(i-4, 5));
    console.log(finalString);
  }
}
//   for(i = 0; i > string.length; i++) {
//     var test = string.slice(0, 5);
//   }
// }


//User Interface
$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var userInput = $(".userInput").val();
    var letterArray = lowercaseString(userInput).split("");
    var codedString = letterArray.join("");
    if(letterArray.length < 3) {
      alert("Please enter wording with 3 or more characters");
    } else {
      console.log(codedString)
      stringsOf5(codedString);
      $(".message").text(finalString.join(""));
    }
  });
});
