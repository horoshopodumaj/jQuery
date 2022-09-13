$("h2, p"); // Первый, второй, третий и т.д.
$("h2 span"); // outer и inner
$("h2 > span"); // parent > child
$("h2 + p"); // prev + next
$("h2 ~ p"); // prev ~ next

// Перечислению (первый, второй, третий...)
// Найти все span внутри блока .container (элемент span - потомок)
// Найти только те span, которые находятся НЕПОСРЕДСТВЕННО внутри .container (span - дочерний элемент)
// Найти все сестринские элементы для тега H2
// Найти только ближайший сестринский элемент для тега H2

$("li");
$(".container span");
$(".container > span").css("border", "1px solid black");
$("h2 ~ p").css("border", "1px solid black");
$("h2 + p");
