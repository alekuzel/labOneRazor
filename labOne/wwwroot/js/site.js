$(document).ready(function () {
    // check the path to then determine whether link is active or not
    var path = window.location.pathname;

    // go through every link in the menu
    $("#menu a").each(function () {
        var href = $(this).attr('href');
        // compare path to currently active href
        if (href === path) {
            //apply class to the active link to make it look different from the other links
            $(this).addClass('active-link');
        }
    });
});
