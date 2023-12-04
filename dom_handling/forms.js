$(document).ready(function(){

   $("#firstname").keyup(function(){
        var inputValue = $(this).val();
        $("#sp1").text(inputValue);
   })

   $("select").change(function(){
        var selectedValue = $("select").val() || [];
        $("#sp2").text(selectedValue.join(','));
    })
}) 