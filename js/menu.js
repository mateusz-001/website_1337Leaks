$(".burger").on("click", function () {
    $(".fas, aside").toggleClass("show");
})
$("nav button").on("click", function () {
    $(".fas, aside").removeClass("show");
})