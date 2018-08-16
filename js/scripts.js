
//Business Logic
var lowercaseString = function(string) {
  return string.split(/[\W]/).join("").toLowerCase();
}

//User Interface
$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var userInput = $(".userInput").val();
    var letterArray = lowercaseString(userInput).split("");
    console.log(letterArray);
    $(".message").text(letterArray);
  });
});
