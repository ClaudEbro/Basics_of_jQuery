$(document).ready(function(){
    var l = $('p').innerWidth();
    var h =$('p').innerHeight();
    $("#sp1").text('Size (with padding) : ' +h+'x'+l+'px');

    // $("#b1").click(function(){
    //     $('p').width('300px');
    //     $('p').height('100px');

    //     var l2 = $('p').width();
    //     var h2 =$('p').height();
    //     $("#sp2").text('New size : ' +h2+'x'+l2+'px');
    // })
})