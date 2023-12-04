$(document).ready(function(){

    /*We retrieve the size of our title in h1 by sing the css method as a getter.
    var size = $("h1").css("font-size");

    We display this value.
    $("#test").text(size);*/

    
    //Using css method as a setter
    $("h1").css("font-size", "50px");

    var size = $("h1").css("font-size");

    $("#test").text(size);

    /*Working with text method
    var title = $("h1").text();

    $("h1").text("<mark>HTML DOM</mark> handled");

    $("test").text(title);*/


    //Working with html method
    var title = $("h1").html();

    $("h1").html("<mark>HTML DOM</mark> handled");

    $("test").html(title);
})