$(document).ready(function(){

    //We retrieve the value of class of h1
    var atth1 = $("h1").attr("class");

    //We display this value in the span
    $("#test").text("Value of h1 class : " +atth1);

    //We modify the h2 class attribute
    $("h2").attr("class","title");

    //Now, we define 2 attributes (href and target) for the ta a and set these values
    $("a").attr({
        href: "http://claude-ebrottie.com",
        target: "_blank"
    })


})