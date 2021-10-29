$(document).ready(function () {

    var storagekoot = localStorage.getItem("kootcount");
    document.getElementById("count").innerHTML = Number(storagekoot);
    $("#plus").click(function () {
        $(this).addClass("active");
        $("#mines").removeClass("active");
    });
    $("#mines").click(function () {
        $(this).addClass("active");
        $("#plus").removeClass("active");
    });

    var plus = document.getElementById("plus");
    var mines = document.getElementById("mines");


    $(".he").click(function () {
        let val = Number($(this).attr("value"));
        if (hasClass(plus, "active")) {
            var str = document.getElementById("count");
            var savest = Number(str.innerHTML) + val;
            str.innerHTML = savest;
            localStorage.setItem("kootcount", savest);

        } else if (hasClass(mines, "active")) {
            var str = document.getElementById("count");
            savest = Number(str.innerHTML) - val;
            str.innerHTML = savest;

            localStorage.setItem("kootcount", savest);
        }
    });

    $("input[type=text]").change(function () {
        var vamval = $(this).val();
        document.getElementById("vamdar").innerHTML = "وامدار: " + vamval;
    })
    $("input[type=number]").change(function () {
        var cotntv = $(this).val();
        document.getElementById("count").innerHTML = cotntv;
        localStorage.setItem("kootcount", Number(cotntv));
    })
    $("input[type=radio]").change(function () {
        var cotntve = $(this).val();
        document.getElementById("vamdar").innerHTML = "وامدار: " + cotntve;
    })

    document.addEventListener('keypress', function (e) {
        var keycodee = Number(e.code.substr(-1));
        let val = Number(localStorage.getItem("kootcount"));
        if (hasClass(plus, "active")) {
            var str = document.getElementById("count");
            var savest = val + keycodee;
            str.innerHTML = savest;
            localStorage.setItem("kootcount", savest);

        } else if (hasClass(mines, "active")) {
            var str = document.getElementById("count");
            savest = Number(val) - keycodee;
            str.innerHTML = savest;

            localStorage.setItem("kootcount", savest);
        }
    });

});

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}
