var circle = $(".circle");
console.log(circle[0].offsetHeight);
var circle2 = $(".circle2");
console.log(circle[0].offsetHeight);

$( document ).on( "mousemove", function( event ) {
  var screenWidth = $( document ).width();
  var cursorX = event.pageX;
  var cursorY = event.pageY;
  $(".circle").css({
    "left": cursorX,
    "bottom": cursorY
  });
    $(".circle2").css({
    "right": cursorX,
    "top": cursorY
  });
  console.log($( document ).width() / cursorX);
});

