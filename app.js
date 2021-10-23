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

        } else if (hasClass(mines, "active")) {
            var str = document.getElementById("count");
            str.innerHTML = Number(str.innerHTML) - val;
        }
    });

    $("input[type=text]").change(function() {
        var vamval = $(this).val();
        document.getElementById("vamdar").innerHTML = "وامدار: " + vamval;
    })
    $("input[type=number]").change(function() {
        var cotntv = $(this).val();
        document.getElementById("count").innerHTML = cotntv;
    })
    $("input[type=radio]").change(function() {
        var cotntve = $(this).val();
        document.getElementById("vamdar").innerHTML = "وامدار: " + cotntve;
    })

});

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}
