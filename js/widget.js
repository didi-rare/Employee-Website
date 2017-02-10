var emplxhr = new XMLHttpRequest();
emplxhr.onreadystatechange = function () {
    if (emplxhr.readyState === 4){
        var employees = JSON.parse(emplxhr.responseText);
        var StatusHTML = '<ul class="bulleted">';
        for (var i=0; i<employees.length; i+=1){
            if (employees[i].inoffice === true){
                StatusHTML += '<li class="in">';
            } else {
                StatusHTML += '<li class="out">';
            }
            StatusHTML += employees[i].name;
            StatusHTML += '</li>';
        }
        StatusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = StatusHTML;
    }
};
emplxhr.open('GET', 'data/employees.json');
emplxhr.send();

var statusxhr = new XMLHttpRequest();
statusxhr.onreadystatechange = function () {
    if (statusxhr.readyState === 4){
        var stat = JSON.parse(statusxhr.responseText);
        var StatusHTML = '<ul class="rooms">';
        for (var i=0; i<stat.length; i+=1){
            if (stat[i].available === true){
                StatusHTML += '<li class="empty">';
            }else {
                StatusHTML += '<li class="full">';
            }
            StatusHTML += stat[i].room;
            StatusHTML += '</li>';
        }
        StatusHTML +='</ul>';
        document.getElementById('roomList').innerHTML = StatusHTML;
    }
};
statusxhr.open('GET', 'data/rooms.json');
statusxhr.send();
