$(document).ready(function(){
    var l1 = $('p').width();
    var h1 =$('p').height();
    $("#sp1").text('Previous size : ' +h1+'x'+l1+'px');

    $("#b1").click(function(){
        $('p').width('300px');
        $('p').height('100px');

        var l2 = $('p').width();
        var h2 =$('p').height();
        $("#sp2").text('New size : ' +h2+'x'+l2+'px');
    })
})