$(document).ready(function(){
    $("#firstname").keydown(function(){
        $(this).css('background-color','#69C');
    });

    $("#firstname").keyup(function(){
        $(this).css('background-color','#C72');
    });

    $("#firstname").keypress(function(e){
        var lastcharacter = String.fromCharCode(e.which);
        $("#ascii").text(lastcharacter);
    })
});