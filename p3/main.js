$(document).ready(function(){
    $("#evento").click(function(event){
        $(this).css('background', 'green');
    });
    $("p").click(function(event){
        event.stopPropagation();
    });
});


$(function() {  
    $('#evento').click(function(){
        $(this).css('background', 'green');

    });
});

