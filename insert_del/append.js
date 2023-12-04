$(document).ready(function(){

   $("#b1").click(function(){
      $("#p1").append(' - Text added with append()');
   });

   $("#b2").click(function(){
      $("#p2").prepend('Text added with prepend() - ');
   });
})