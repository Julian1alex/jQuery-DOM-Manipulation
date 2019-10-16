$(document).ready(function() {

$(".sections").on("click", "a", function(c) {
var hidden = $(this).attr("href")
$(".content").removeClass("animate") 
$(hidden).addClass("animate")
    }) 
})

// ($(".sections").on("click", "b", function() {
// $(".content").animate({height: "toggle"}
