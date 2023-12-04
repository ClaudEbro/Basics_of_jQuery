$(document).ready(function(){

   $("#b1").click(function(){
      $("#myDiv").after('Text inserted with after()');
   });

   $("#b2").click(function(){
      $("#myDiv").before('Text inserted with before()');
   });

   $("#b3").click(function(){
      $("#myDiv").append('Text inserted with append()');
   });

})