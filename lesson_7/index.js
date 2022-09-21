/* ====== События, связанные с мышью ===== */

// $("button").click(function (event) {
//     console.log("Click");
// }); // Клик мышью

// $("button").dblclick(function () {
//     console.log("Click 2");
// }); // Двойной клик мышью

// $("ul li").mouseenter(function () {
//     $(this).css("color", "red");
// }); // Наведение мыши на элемент

// $("ul li").mousedown(function () {
//     $(this).css("color", "red");
// }); // Момент нажатия кнопки мыши

// $("ul li").mouseup(function () {
//     $(this).css("color", "green");
// }); // Момент "отжатия" кнопки мыши :)

// $("ul li").mouseover(function () {
//     $(this).css("color", "blue");
// }); // Мышь наезжает на площадь элемента

// $("ul li").mouseout(function () {
//     $(this).css("color", "purple");
// }); // Мышь покидает площадь элемента

$("ul li").mousemove(function () {
    $(this).toggleClass("blue");
}); // Движение мыши над элементом
