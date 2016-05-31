$(document).ready(function() {
  $("p#first").click(function() {
    $(".selected-text p#first").removeClass();
    $(".selected-text p#first").addClass("highlighted");
  });

  $("p#second").click(function() {
    $(".selected-text p#second").removeClass();
    $(".selected-text p#second").addClass("highlighted");
  });


});
