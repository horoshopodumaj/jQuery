//$("a[download]").css("border", "1px solid red"); //Полный атрибут
//$('a[href="http://ya.ru"]').css("border", "1px solid green"); //Полное соответствие
//$('a[href!="http://ya.ru"]').css("border", "1px solid green"); //Полное несоответствие
//$('a[href^="http"]').css("border", "1px solid green"); //Начинается с ...
//$('a[href$=".com"]').css("border", "1px solid green"); //Заканчивается на ...
//$('a[href*="ya"]').css("border", "1px solid green"); //Содержит ...
//$('a[data-target|="main"]').css("border", "1px solid green"); //Имеет префикс ...
//$("a[href][download]").css("border", "1px solid green"); //Имеет одновременно несколько атрибутов ...

// Атрибуту href
//$("[href]").css("border", "1px solid red");
// Атрибуту href, который полностью соответствует "http://mail.ru"
//$("a[href='http://mail.ru']").css("border", "1px solid red");
// Атрибуту src, который начинается на "img/"
//$("[src^='img']").css("border", "1px solid red");
// Атрибуту src, который заканчивается на ".js"
//$('[src$=".js"]').css("border", "1px solid red");
// Атрибутам src и title
//$("[src], [title]").css("border", "1px solid red");
