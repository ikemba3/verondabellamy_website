$(document).ready(function(){
    var hash = window.location.hash;
    var link = $('a');
    $('a').click(function(e){
        e.preventDefault();
        hash = link.attr("href");
        window.location = hash;
    })
})