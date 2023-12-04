$(document).ready(function(){

    $("#c").change(function(){
        var v = $(this);
        $("#test").html(
            "Attribute value : " + v.attr("checked") +
            "<br>Property value : " + v.prop("checked")
        );
    });
})