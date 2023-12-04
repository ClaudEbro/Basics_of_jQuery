$(document).ready(function(){
    var size = $('p').css('font-size');
    $("#msg").text('Size of basic text : ' + size);

    $("#b1").click(function(){
        $("p").css({
            'color':'orange',
            'font-weight' : 'bold'
        });
    })
})