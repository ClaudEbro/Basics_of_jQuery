$(document).ready(function(){
    $("#b1").click(function(){
        $("#myDiv").addClass('orange bold center');
    })

    $("#b2").click(function(){
        $("#myDiv").removeClass('default orange bold center');
    })
})