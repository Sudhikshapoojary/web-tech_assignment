$(document).ready(function() {
    $("#registrationForm").submit(function(e) {
        e.preventDefault(); 

        $.ajax({
            url: "process.php",
            type: "POST",
            data: $(this).serialize(),
            success: function(response) {
                $("#result").html(response).fadeIn();
                $("#registrationForm")[0].reset(); 
            },
            error: function() {
                $("#result").html("Error processing request.").fadeIn();
            }
        });
    });
});