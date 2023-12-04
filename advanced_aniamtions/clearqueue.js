$(document).ready(function(){
    $("#b1").click(function(){
        $('div')
            .animate({left : '+=200px'}, 1000)
            .animate({top: '+=50px'}, 400)
            .queue(function(){
                $(this).toggleClass('blue').dequeue();
            })
            .animate({left : '+=200px'}, 1000)
            .animate({top: '+=50px'}, 400)
    });

    $("#b2").click(function(){
        $('div').clearQueue();
    })
})