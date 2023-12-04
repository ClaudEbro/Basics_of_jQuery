$(document).ready(function(){

   $('h1').next().css({"color" : "red"});
   $('.p1').nextAll().css({"color" : "purple"});
   $('.li1').nextUntil('.li4').css({"color" : "orange"});
})