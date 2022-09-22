/* ====== Базовые события ===== */

// click()
// $("ul li").click(function () {
//     console.log("Click");
//     $("ul").append("<li>New element</li>");
// });

// $("ul").on("click", "li", function () {
//     console.log("Click 2");
//     $("ul").append("<li>New element</li>");
// });

// function addAndStop() {
//     $("ul").append("<li>New element</li>");
//     $("ul").off("click");
// }

// $("ul").on("click", "li", addAndStop); //удаление обработчика событий

//В HTML документе есть кнопка "Создать картинку". При клике на кнопку нужно создать картинку и еще одну кнопку. На картинке может быть любое изображение, а вторая кнопка содержит текст "Удалить картинку. При клике на свежесозданную кнопку удаляется картинка и сама кнопка.

// $("button").click(function () {
//     $("div .image")
//         .append("<p>Image</p>")
//         .append("<button class='remove'>Удалить картинку</button>");
// });

$("button").on("click", function () {
    $("div .image")
        .append("<p>Image</p>")
        .append("<button class='remove'>Удалить картинку</button>");
});

$("div .image").on("click", "button", function () {
    $("button.remove, p").remove();
});
