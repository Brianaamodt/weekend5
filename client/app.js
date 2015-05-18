/**
 * Created by brianaamodt on 5/17/15.
 */

function getData() {
    $.ajax({
        type: "GET",
        datatype: "application/json",
        url: "/users/findUsers",
        success: function(response) {
            console.log("GET successful", response);
            displayData(response);
        },
        error: function(err) {
            console.log("GET not found ", err);
        },
        complete: function() {
            console.log("Get complete");
        }
    });
}

function displayData(data) {
    $('.displayUsers').empty();
    for (var j = 0; j < data.length; j++) {
        var username = "Username: " + data[j].username + "\n";
        var firstName = "First Name: " + data[j].firstName;
        var lastName = "First Name: " + data[j].lastName;
        var email = "Email: " + data[j].email + "\n";
        $(".displayUsers").append("<div>" + username + name + email + removeBtn + "</div>");
    }
}