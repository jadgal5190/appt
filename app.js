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
    $("#vamdarcustom").change(function () {
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
        if (keycodee == 0) {
            $("#mines").toggleClass("active");
            $("#plus").toggleClass("active");
        }
        let val = Number(localStorage.getItem("kootcount"));
        if (hasClass(plus, "active") && !isNaN(keycodee)) {
            var str = document.getElementById("count");
            var savest = Math.abs(val + keycodee);
            str.innerHTML = savest;
            localStorage.setItem("kootcount", savest);

        } else if (hasClass(mines, "active") && !isNaN(keycodee)) {
            var str = document.getElementById("count");

            savest = Math.abs(Number(val) - keycodee);
            str.innerHTML = savest;

            localStorage.setItem("kootcount", savest);
        } else if (e.code == "NumpadSubtract" || e.code == "Minus") {
            $("#mines").addClass("active");
            $("#plus").removeClass("active");
        } else if (e.code == "NumpadAdd" || e.code == "Plus") {
            $("#plus").addClass("active");
            $("#mines").removeClass("active");
        }
        if (str.innerHTML == 40 && document.getElementById("vamdar").innerHTML == "وامدار: حوت") {
            var msg = new SpeechSynthesisUtterance();
            var voices = window.speechSynthesis.getVoices();
            msg.voice = voices[6];
            msg.volume = 1; // From 0 to 1
            msg.rate = 0.7; // From 0.1 to 10
            msg.pitch = 0; // From 0 to 2
            msg.text = "Hooout chell kooott vaamdaaree"
            msg.lang = 'en';
            speechSynthesis.speak(msg);
        }

    });

});

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}
