$(document).ready(function(){
    $("#b1").click(function(){
        $('h1')
            .animate({width : '-=10%'}, 5000)
            .animate({fontSize: '20%'}, 5000)
            .fadeTo(2000,0.5);
    });

    function pending(){
        var n = $('h1').queue('fx');
        $('span').text(n.length);
        setTimeout(pending,10); 
    }
    pending();
})