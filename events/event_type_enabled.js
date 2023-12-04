$(document).ready(function(){
    $('p').on('click mouseover mouseout', function(e){
        $("#msg").text("Event enabled : " +e.type);
    })
})