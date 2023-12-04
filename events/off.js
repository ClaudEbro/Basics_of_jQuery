$(document).ready(function(){
    $("#msg").hide();

    $("#b2").click(function(){
        $('#b1').on('click', function(){
            $("#msg").show();
        });
        $("#b1").text("Now, you can clik on me.");
    });

    $("#b3").click(function(){
        $('#b1').off('click');
        $('#b1').text('No click possible');
    });
})