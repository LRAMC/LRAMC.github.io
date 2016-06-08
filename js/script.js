$(document).ready(function() {
    console.log($(".nav-bar").css('max-width'));
    
    // Arrange the nav bar items
    $(".nav-bar-options > *").hover(function () {
        var elem = $(this);
        console.log("Hovering over: " + elem.children("[title]").attr('title'));
    }, function () {
        var elem = $(this);
        console.log("Leaving: " + elem.attr('title'));
    });
});

function arrangeNavBarOptions() {
    $(".nav-bar-options > *");
}
