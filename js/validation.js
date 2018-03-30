$(function () {
    $("#form").submit(function (e) {
        e.preventDefault()
    });
    $("#form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            name: {
                required: true,
                minlength: 2
            },
            textarea: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            email: {
                required: "Please enter an email address",
                email: "Please enter a valid email address"
            },
            name: {
                required: "Name is required",
                minlength: "Please write at least 2 characters"
            },
            textarea: {
                required: "Message is required",
                minlength: "Please write at least 10 characters"
            }
        },
        submitHandler: function (form) {

            sendWhiteForm();

        }
    });
});


function sendWhiteForm() {
    $.ajax({
        type: "post",
        url: "/ajax/Form/AppDetails/",
        data: $("#form").serialize(),
        dataType: "json",
        success: function (ret) {
            if (ret["status"] == 0) {
                $("<div class='popup success13'><div class='popup-inner'>" +
                    "<p>Success</p><a class='popup-close' href='#'>x</a></div></div>").insertAfter("form");
                $(".popup.success13").show();
                popup();
                console.log("jest ok") // stworzyć diva z podziekowaniem
            } else {
                if (ret["status"] == 1) { // div wyswietlajace info bledne dane
                    $("label.error").remove();
                    $.each(ret["errors"], function (idx, val) {});
                    console.log("1")
                } else {
                    console.log("else")
                }
            }
        },
        error: $(function () {
            $(".popup.error13").show();
            popup();
        })
    })
}

function popup() {
    $(".popup-close").click(function () {
        $(".popup").hide();
    })
}