/* Пишем свой калькулятор на сайт */

$(function () {
    let mCount = $(".m-count");
    let floorNumber = $(".floor-number");
    let typeOfHouse = $('input[name="typeOfHouse"]').val();
    let project = $('input[type="checkbox"]');
    let price = $("#price");
    let finalPrice = 900000;
    let basePrice = 30000;
    let design = 0;

    let calcPrice = () => {
        finalPrice =
            +mCount.val() * basePrice * floorNumber.val() * typeOfHouse +
            design;
        price.text(finalPrice);
    };

    mCount.change(function () {
        if ($(this).val() >= 20) {
            $(this).tooltip("destroy");
            calcPrice();
        } else {
            $(this).tooltip("toggle");
        }
        console.log(mCount.val());
    });

    floorNumber.change(function () {
        calcPrice();
    });

    $('input[name="typeOfHouse"]').change(function () {
        typeOfHouse = $(this).val();
        calcPrice();
        $(this).val() == 1
            ? $("img").attr("src", "img/1.jpg")
            : $("img").attr("src", "img/2.png");
    });

    project.change(function () {
        $(this).is(":checked") ? (design = 15000) : (design = 0);
        calcPrice();
    });

    price.text(finalPrice);
});
