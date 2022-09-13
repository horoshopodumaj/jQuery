/* ====== Фильтры ===== */

/* Простые фильтры в jQuery */

//$("p:first").css("border", "1px solid blue"); // Первый элемент
//$("p:last").css("border", "1px solid blue"); // Последний элемент
//$("a:eq(1)").css("border", "1px solid green"); // Элемент под номером ... (нумерация с 0)
//$("*:not(li, a, ul)").css("border", "1px solid yellow"); // Исключает из найденных элементов selector
//$("li:even").css("border", "1px solid red"); // Четные найденные элементы
//$("li:odd").css("border", "1px solid red"); // Нечетные найденные элементы
//$("li:gt(2)").css("border", "1px solid red"); // Элементы чей порядковый номер больше n
//$("li:lt(2)").css("border", "1px solid green"); // Элементы чей порядковый номер меньше n
//$("*:header").css("border", "1px solid blue"); // Только те элементы, которые являются заголовками
//$('li:animated').css("border", "1px solid blue");// Только те элементы, которые задействованы в анимации
//$("li:hidden").css("border", "1px solid blue"); // Скрытые элементы
//$("li:visible").css("border", "1px solid blue"); // Видимые элементы
//$("li:lang(ru)").css("border", "1px solid blue"); // Фильтрация по языку

// Найти первый элемент li из списка ul
//$("ul li:first").css("border", "1px solid blue");
// Найти последний элемент из списка ul
//$("ul li:last").css("border", "1px solid blue");
// Найти все четные li из списка ul
//$("ul li:even").css("border", "1px solid blue");
// Найти элемент из списка, чей порядковый номер больше 3 и задать ему красный фон
//$("ul li:gt(2)").css("background-color", "red");
