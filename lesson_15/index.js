/* Делаем собственный слайдер на jQuery */

$(function () {
    var slideNow = 1;
    var slideCount = $(".sliderwprapper").children().length;
    var slideTime = 2000;
    var navBtn = $(".slide-nav");

    navBtn.click(function () {
        navBtn = $(this).index();
        $(".active").removeClass("active");
        $(this).toggleClass("active");
        if (navBtn + 1 != slideNow) {
            var translateWith = -$(".viewport").width() * navBtn;
            $(".sliderwprapper").css({
                transform: `translate(${translateWith}px,0)`,
                "-o-transform": `translate(${translateWith}px,0)`,
                "-webkit-transform": `translate(${translateWith}px,0)`,
            });
            slideNow = navBtn + 1;
        }
    });

    // setInterval(nextSlide, slideTime);

    $(".btn-next").click(nextSlide);
    $(".btn-prev").click(prevSlide);

    function nextSlide() {
        if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
            $(".active").removeClass("active");
            $(".sliderwprapper").css({
                transform: "translate(0,0)",
                "-o-transform": "translate(0,0)",
                "-webkit-transform": "translate(0,0)",
            });
            slideNow = 1;
            $(`.slide-nav:eq(${slideNow - 1})`).toggleClass("active");
        } else {
            $(".active").removeClass("active");
            var translateWith = -$(".viewport").width() * slideNow;
            $(".sliderwprapper").css({
                transform: `translate(${translateWith}px,0)`,
                "-o-transform": `translate(${translateWith}px,0)`,
                "-webkit-transform": `translate(${translateWith}px,0)`,
            });
            slideNow++;
            $(`.slide-nav:eq(${slideNow - 1})`).toggleClass("active");
        }
    }
    function prevSlide() {
        if (slideNow === 1 || slideNow <= 0 || slideNow > slideCount) {
            $(".active").removeClass("active");
            var translateWith = -$(".viewport").width() * (slideCount - 1);
            $(".sliderwprapper").css({
                transform: `translate(${translateWith}px,0)`,
                "-o-transform": `translate(${translateWith}px,0)`,
                "-webkit-transform": `translate(${translateWith}px,0)`,
            });
            slideNow = slideCount;
            $(`.slide-nav:eq(${slideNow - 1})`).toggleClass("active");
        } else {
            $(".active").removeClass("active");
            var translateWith = -$(".viewport").width() * (slideNow - 2);
            $(".sliderwprapper").css({
                transform: `translate(${translateWith}px,0)`,
                "-o-transform": `translate(${translateWith}px,0)`,
                "-webkit-transform": `translate(${translateWith}px,0)`,
            });
            slideNow--;
            $(`.slide-nav:eq(${slideNow - 1})`).toggleClass("active");
        }
    }
});
