// function show1() {
//     var duo = document.getElementById("duo-eu");
//     var noster = document.getElementById("noster");
//     var quaeque = document.getElementById("quaeque");
//     noster.style.display = "none";
//     quaeque.style.display = "none";
//     if (duo.style.display == "block") {
//         duo.style.display = "none";
//     } else {
//         duo.style.display = "block";
//     }
// }

// function show2() {
//     var duo = document.getElementById("duo-eu");
//     var noster = document.getElementById("noster");
//     var quaeque = document.getElementById("quaeque");
//     duo.style.display = "none";
//     quaeque.style.display = "none";
//     if (noster.style.display == "block") {
//         noster.style.display = "none";
//     } else {
//         noster.style.display = "block";
//     }
// }

// function show3() {
//     var duo = document.getElementById("duo-eu");
//     var noster = document.getElementById("noster");
//     var quaeque = document.getElementById("quaeque");
//     duo.style.display = "none";
//     noster.style.display = "none";
//     if (quaeque.style.display == "block") {
//         quaeque.style.display = "none";
//     } else {
//         quaeque.style.display = "block";
//     }

// }


// $(".btn-gall").click(function(){

//     var dataTab = $(this).attr("data-tab");// pobiera wartosc data-tab kliknietego buttona
//     $(".tabs-container .row").hide();
//     $(".tabs-container .row[data-show-tab="+dataTab+"]").show();
//     $(".row").attr("data-show-tab",dataTab);
//     $(".btn-gall").removeClass("active");
//     $(this).addClass("active");
//     console.log(dataTab);
// })


// .row[data-show-tab="2"] {
//     background-color: black;
// }




// $("li").mouseover(function(){
//     $(this).css("color", "blue")

// }).mouseleave(function(){
//     $(this).css("color", "black")

// });

// $(".btn-gall").click(function(){
//     $(".tabs-container .row").addClass("animation");
// })

$(".btn-gall").click(function () {
    var tab = $(this).index();
    $(".tabs-container .transition").hide().removeClass("animation");
    $(".tabs-container .transition").eq(tab).show().addClass("animation");
    $(".btn-gall").removeClass("active");
    $(this).addClass("active");
    // console.log(tab);
});


$(".plusMinus").click(function () {
    $(this).next().slideToggle();

    if ($(this).text() == ("+"))
        $(this).text("-").css("background-color", "#21687e");
    else
        $(this).text("+").css("background-color", "#656565");
});