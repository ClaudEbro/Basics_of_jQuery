$(document).ready(function(){

   $("#b1").click(function(){
      $(".toWrapAll").wrapAll('<div class="wrapA"></div>');
   })
   
   $("#b2").click(function(){
      $(".toWrapAll").unwrap();
   })
})