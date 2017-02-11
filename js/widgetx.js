$(document).ready(function () {
    var url_emply = "data/employees.json";
    $.getJSON(url_emply, function (response) {
        console.log(response);
        var StatusHTML = '<ul class="bulleted">';
        $.each(response, function (index, employee) {
            if (employee.inoffice === true){
                StatusHTML += '<li class="in">';
            }else {
                StatusHTML += '<li class="out">';
            }
            StatusHTML += employee.name + '</li>';
        });//end of each
        StatusHTML += '</ul>';
        $('#employeeList').html(StatusHTML);
    });//end of json

    var url_room = "data/rooms.json";
    $.ajax(url_room, function (respose) {

    });
    $.getJSON(url_room, function (response) {
        var StatusHTML = '<ul class="rooms">';
        $.each(response, function (index, room) {
            if (room.available === true){
                StatusHTML += '<li class="empty">';
            }else {
                StatusHTML += '<li class="full">';
            }
            StatusHTML += room.room + '</li>';
        });//end of each
        StatusHTML += '</ul>';
        $('#roomList').html(StatusHTML);
    })//end of json
        .fail(function (jqXhr) {
            $('#roomList').html('<p> sorry! ' + jqXhr.statusText + ' error.</p>');
        });

});//end of ready