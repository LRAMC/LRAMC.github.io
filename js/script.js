$(document).ready(function() {
    (function( module, $, undefined ) {

        var navBar = $(".nav-bar-options");
        var navBarItems = navBar.find("li");

        module.centerNavBarOptions = function () {
            var totalChildrenWidth = navBarItems.map(function(_, elem) {
                return $(elem).outerWidth(true);
            }).toArray().reduce(function (prev, curr) {
                return prev + curr;
            }, 0);

            var childrenSize = parseInt(navBar.css('font-size'));

            // Only want to space the elements out if there is more than one
            // of them
            if (navBarItems.length > 1) {
                var spaceBetween = (navBar.width() - totalChildrenWidth) / (navBarItems.length - 1) / childrenSize;
                var dataText = repeat("*", spaceBetween + 1);
                navBarItems.each(function() {
                    $(this).attr('data-before', dataText);
                });
            }
        };

    }) (window.module = window.module || {}, jQuery);

    ///////////////////////////// SCRIPT STARTS HERE /////////////////////////////////////////////////////
    module.centerNavBarOptions();
});

function repeat(pattern, count) {
    if (count < 1) return '';
    var result = '';
    while (count > 1) {
        if (count & 1) result += pattern;
        count >>= 1, pattern += pattern;
    }
    return result + pattern;
}

