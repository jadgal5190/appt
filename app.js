$(document).ready(function() {


    $("#plus").click(function() {
        $(this).addClass("active");
        $("#mines").removeClass("active");
    });
    $("#mines").click(function() {
        $(this).addClass("active");
        $("#plus").removeClass("active");
    });

    var plus = document.getElementById("plus");
    var mines = document.getElementById("mines");


    $(".he").click(function() {
        let val = Number($(this).attr("value"));
        if (hasClass(plus, "active")) {
            var str = document.getElementById("count");
            str.innerHTML = Number(str.innerHTML) + val;

        }

        if (hasClass(mines, "active")) {
            var str = document.getElementById("count");
            str.innerHTML = Number(str.innerHTML) - val;
        }
    });

    $("input[type=text]").change(function() {
        var vamval = $(this).val();
        document.getElementById("vamdar").innerHTML = "وامدار: " + vamval;
    })



});

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}