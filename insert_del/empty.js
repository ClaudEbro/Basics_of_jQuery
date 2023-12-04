$(document).ready(function(){

   $("#b1").click(function(){
      $("div").remove('#div1');
   });

   $("#b2").click(function(){
      $("#div2").empty();
   });

})