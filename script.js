// Button click event handlers
$(".bedtime").click(function() {
    $("img").hide();
    $(".sleep").show();
    $("body").css("background-color", "darkblue");
});

$(".pet-the-cat").click(function() {
    $("img").hide();
    $(".pets").show();
});

$(".feed-the-cat").click(function() {
    $("img").hide();
    $(".pizza").show();
});

$(".play-music").click(function() {
    $("img").hide();
    $(".party").show();
});

$(".hack").click(function() {
    $("img").hide();
    $(".hack").show();
});

// Easter egg! Double click on Pusheen
$("img").dblclick(function() {
    $("img").hide();
    $(".love").show();
});

// Reset to default 
$(".actions").mouseenter(function() {
    $("img").hide();
    $(".default").show();
    $("body").css("background-color", "#FBF0E7");
});