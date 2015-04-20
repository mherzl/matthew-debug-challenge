$(document).ready(function(){
  $("button").on("click", function() {
    var message = $("this is a new message");
    $(".classHere").append(message);
    $("button").remove();
  });
});
