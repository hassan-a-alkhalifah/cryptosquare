$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("userInput").val());
  });
});
