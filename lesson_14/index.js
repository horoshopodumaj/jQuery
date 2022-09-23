/* Табы */

$(function () {
    var tab = $('a[data-toggle="tab"]');
    // var target = $('div[tab-pane]');
    tab.on("click", function () {
        event.preventDefault();
        $(".active").removeClass("active");
        $(this).parent().toggleClass("active");
        var target = $(this).attr("href");
        $(target).toggleClass("active");
    });
});
