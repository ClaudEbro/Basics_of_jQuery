$(document).ready(function(){
    $("#b1").click(function(){
        $('div')
            .animate({left : '+=200px'}, 1000)
            .delay(1000)
            .animate({top: '+=50px'}, 400)
            .delay(2000)
            .animate({left : '+=200px'}, 1000)
    });

    $("#b2").click(function(){
        $('div').finish();
    })
})