$(document).ready(function(){
    // $("#output").load("samples.txt", function(response, statusTxt, xhr){
    //     if (statusTxt === "success") alert("Success !!");
    //     if (statusTxt === "error") alert("Error :" + xhr);
    // })

    $.get("https://jsonplaceholder.typicode.com/users",
    function(data, status){
        console.log(data, status)
    });

    $.post("https://jsonplaceholder.typicode.com/posts",
    {title: "This is the title", body: "This is body"}, 
        function(data, status){
            console.log(data, status)
        })
})