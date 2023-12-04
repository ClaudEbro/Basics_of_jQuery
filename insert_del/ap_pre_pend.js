$(document).ready(function(){

   $("#b1").click(function(){
      withAppend();
   });

   $("#b2").click(function(){
      withPrepend();
   });

   function withAppend(){
      var t1 = '<p>Paragraph created  in HTML.</p>';
      var t2 = $('<p></p>').text('Paragraph created with jQuery.');
      var t3 = document.createElement('p');
      t3.innerHTML = 'Paragraph creatred in JavaScript.';
      $("#myDiv").append(t1, t2, t3);
   }

   function withPrepend(){
      var t4 = '<p>Paragraph created  in HTML.</p>';
      var t5 = $('<p></p>').text('Paragraph created with jQuery.');
      var t6 = document.createElement('p');
      t6.innerHTML = 'Paragraph creatred in JavaScript.';
      $("#myDiv").prepend(t4, t5, t6);
   }
})