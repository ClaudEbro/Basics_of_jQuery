$(document).ready(function(){

   $('li').not(':nth-child(even)').css({"color" : "blue"});
   $('tr').not(':nth-child(odd)').css({"background" : "orange"});
})