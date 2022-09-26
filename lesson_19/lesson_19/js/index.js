/* Технология AJAX */

$(function () {
    let sectionHeight = $("#section-1").height();
    console.log(sectionHeight);
    $(window).scroll(function () {
        let top = $(this).scrollTop();
        console.log(top);
        if (top == sectionHeight) {
            $("#sections").load("./sections.html");
        }
    });
});
