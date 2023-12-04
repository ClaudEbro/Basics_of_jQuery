$(document).ready(function(){

   $('.p3').prev().css({"color" : "red"});
   $('.p2').prevAll().css({"color" : "purple"});
   $('.li4').prevUntil('.li1').css({"color" : "orange"});
})