$(document).ready(function() {
    
    // Scale the background image to fit the page
    console.log("Width is: " + $(".content:before").width());
    
    var nav_bar = $(".nav-bar");
    var logo = $(".nav-bar-logo"); 
    var options = $(".nav-bar-options");
    
//    logo.centerVertical().css({
//        display: "inline-block",
//        width: "10%",
//        height: nav_bar.height()
//    });
//        
//    options.centerVertical().css({
//        display: "inline-block",
//        width: "80%",
//        height: nav_bar.height()
//    });
    
    arrangeNavBarOptions();
});

function arrangeNavBarOptions() {
    var options = $(".nav-bar-options");
    var item_width = Math.max.apply(null, $(options).find("a").map(function(_, elem) {
        return $(elem).outerWidth(true);
    }));
    
    console.log(item_width);
}

$.fn.extend ({
    centerVertical: function() {
        this.css({
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)"
        });
        return this;
    }
});
