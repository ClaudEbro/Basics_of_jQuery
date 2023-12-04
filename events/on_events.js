$(document).ready(function(){
    // $('p').on('click', function(){
    //     $(this).hide();
    // });

    // $('.div1').on("mouseenter mouseleave", function(){
    //     $("#msg").text("You are in or out the div");
    // })

    $('.div1').on({
        mouseenter : function(){
            $("#msg").text("You are in the div");
        },
        mouseleave : function(){
            $("#msg").text("You are out the div");
        }
    });
    
})