$(document).ready(function(){
    $("#firstname").focus(function(){
        $(this).css('background-color','yellow');
    });

    // $("#fld").focusin(function(){
    //     $(this).css('background-color','yellow');
    // });

    // $("#fld").focusout(function(){
    //     $(this).css('background-color','purple');
    // });

    $("#lastname").blur(function(){
        $(this).css('background-color','purple');
    });

    $("#list").change(function(){
        alert("New option selected");
    })

    $("#formid").submit(function(){
        alert("Form sent");
    })
});