$(document).ready(function(){

   $('#b1').click(function(){
      $("#p1").replaceWith('<h2>A title in h2</h2>');    
   });

   $('#b2').click(function(){
      $('<h2>An other title in h2</h2>').replaceAll("#p2");    
   });
})