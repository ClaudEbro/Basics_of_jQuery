
$("document").ready(function(){

    /* Double Click Function
    $("button").dblclick(function(){
        $("#img1").css('width', '500px'); 
    })
    */

    /*Mouse enter and mouse leave functions
    $("#img1").mouseenter(function(){
        $("#img1").css('width', '500px');
    })

    $("#img1").mouseleave(function(){
        $("#img1").css('width', '250px');
    })
    */

    $("#img1").hover(func1, func2)
    function func1(){
        $("#img1").css('width','500');
    }
    function func2(){
        $("#img1").css('width','250');
    }

})  

