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

$(".btn-gall").click(function() {
    var tab = $(this).index();
    $(".tabs-container .transition").hide().removeClass("animation");
    $(".tabs-container .transition").eq(tab).show().addClass("animation");
    $(".btn-gall").removeClass("active");
    $(this).addClass("active");
});


$(".plusMinus").click(function() {
    $(this).next().slideToggle();

    if ($(this).text() == ("+"))
        $(this).text("-").css("background-color", "#21687e");
    else
        $(this).text("+").css("background-color", "#656565");
});

//hamburger
$('#hamburger').click(function() {
    $(this).toggleClass('animate-ham');
})

$("#hamburger").click(function() {
    $("header ul").toggleClass("open-menu");
})


//slideshow
// var currentSlide = 0
// var carouselList = $('#carousel ul');

// function changeSlide() {
//     carouselList.animate({
//         'marginLeft': -1200
//     }, 500, moveFirstSlide);
// };

// function moveFirstSlide() {
//     var firstItem = carouselList.find("li:first");
//     var lastItem = carouselList.find("li:last");

//     lastItem.after(firstItem);
//     carouselList.css({
//         marginLeft: 0
//     });
// };

// setInterval(changeSlide, 5000);





// $(".slider").on('click', 'button', function() {
//     currentSlide = $(this).index();
//     // renderSlide(currentSlide);
//     // restartInterval();
//     console.log(currentSlide);
// });


// var dane2 = {
//     class: "p89",
//     spanVal: "89%"
// }

// // console.log(dane2.class);
// // console.log(dane2.spanVal);
// var data2 = JSON.parse(dane);


// console.log(data2.class);

$.ajax({ 
    type: 'GET', 
    url: 'dane.json', 
    dataType: 'json',
    success: function (data) { 
       console.log(data)
        $.each(data, function(index, element) {
            console.log(element.chart);
            $(".charts .col-3").eq(index).find(".c100").addClass("p"+ element.chart);
            $(".charts .col-3").eq(index).find("span").text(element.chart +"%")
        });
    }
});