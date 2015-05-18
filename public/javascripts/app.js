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
            showData(response);
        },
        error: function(err) {
            console.log("GET not found ", err);
        },
        complete: function() {
            console.log("Get complete");
        }
    });
}

function showData(data) {
    $('.findUsers').empty();
    for (var i = 0; i < data.length; i++) {
        var username = "Username: " + data[i].username;
        var firstName = "First Name: " + data[i].firstName;
        var lastName = "First Name: " + data[i].lastName;
        var email = "Email: " + data[i].email;
        $(".findUsers").append("<li>" + username + "</br>" + firstName + "</br>" + lastName + "</br>" + email + "</li>");
    }
}

$(document).ready(function(){
    getData();
});