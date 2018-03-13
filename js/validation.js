$(function() {
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
        }
    });
});