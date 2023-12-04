$(document).ready(function(){
    var w = $('p').outerWidth();
    var tw =$('p').outerWidth(true);

    var h = $('p').outerHeight();
    var th =$('p').outerHeight(true);

    $("#sp1").html(
        'Outer size : ' +h+'x'+w+'px<br>' +
        'Outer size (total) : ' +th+'x'+tw+'px<br>');
})