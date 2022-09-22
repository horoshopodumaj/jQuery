/* ====== Переменные и их свойства ===== */

var email = "@cat",
    name = "Mr. Cat",
    surname = "Meow";

var num = 5423; // Числа
var str = "Можно писать что угодно"; // Строки
var bool = false; // Булевые значения
var myVar = null; // Ничего :)
var undefinds; // Значение не присвоено
var man = {
    name: "Артем",
    age: 25,
    message: "привет",
};

//Создать два input и кнопку "Отправить". Первый инпут содержит имя пользователя, второй его фамилию.

//При нажатии на кнопку "Отправить" вывести в консоль "Имя + фамилия". Внимание, значения полей нужно заносить в ОБЪЕКТ (т.е. массив {} ). Сообщение в консоль нужно вывести при помощи переменных.

var user = {
    name: "Maria",
    surname: "Li",
};

$("p").append(`<input value=${user.name} />`);
$("p").append(`<input value=${user.surname} />`);
$("p").append(`<button>Отправить</button>`);
$("p").on("click", "button", function () {
    console.log(`${user.name} + ${user.surname}`);
});
