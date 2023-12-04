$(document).ready(function(){

   $('li').filter(':nth-child(even)').css({"color" : "blue"});
   $('tr').filter(':nth-child(odd)').css({"background" : "orange"});
})