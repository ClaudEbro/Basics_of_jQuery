$(document).ready(function(){

   $('span').parentsUntil(".l1").css({
      "color" : "blue",
      "border" : "2px solid orange"
   });
})