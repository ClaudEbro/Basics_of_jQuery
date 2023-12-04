//Callback function alert take place after animate function.
/*$("document").ready(function(){
    $("#btn").click(function(){
        $("#img1").animate({
            left : '150px',
            opacity : 1,
            height : '400px',
            width : '400px'
        },'slow', function(){
            alert('Animated')
        })
        
    })   
})  
*/

//Now Callback and Chaining

$("document").ready(function(){
    $("#btn").click(function(){
        $("#img1").slideUp(2000).css('opacity','1').slideDown(2000).fadeOut(2000).fadeIn(2000);
    })
})

