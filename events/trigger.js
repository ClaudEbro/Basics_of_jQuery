$(document).ready(function(){
    $("#trg").click(function(){
        $('#fcs').trigger('focus');
    });

    $("#trgh").click(function(){
        $('#fcs').triggerHandler('focus');
    });

    $("#fcs").focus(function(){
        $('#msg').text('Event focus enabled');
    });
})