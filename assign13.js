//var type, first, last, studentId, level, instrument, location, room, time, first2, last2, studentId2, error;

let myForm = document.getElementById("infoForm");




function ndStudent() {
    if (document.getElementById("duet").checked == true) {
        document.getElementById("nd").style.visibility = "visible";
    } else {
        document.getElementById("nd").style.visibility = "hidden";
    }
}

function focus() {
    document.getElementById("display").innerHTML = "Clear!";
    document.getElementById("first").focus();
}

function register() {

    let data = new FormData(myForm);
    let first = data.get("first_name");
    let last = data.get("last_name");
    let studentId = data.get("student_id");
    let level = data.get("level");
    let instrument = data.get("instrument");
    let location1 = data.get("location");
    let room = data.get("room");
    let time = data.get("time");

    let error = true;

    if (first == "") {
        document.getElementById("firstError").style.visibility = "visible";
        error = true;
    } else {
        document.getElementById("firstError").style.visibility = "hidden";
        error = false;
    }

    if (last == "") {
        document.getElementById("lastError").style.visibility = "visible";
        error = true;
    } else {
        document.getElementById("lastError").style.visibility = "hidden";
        error = false;
    }

    if (studentId == "") {
        document.getElementById("idError").style.visibility = "visible";
        error = true;
    } else {
        document.getElementById("idError").style.visibility = "hidden";
        error = false;
    }

    if (level == "none") {
        document.getElementById("skillError").style.visibility = "visible";
        error = true;
    } else {
        document.getElementById("skillError").style.visibility = "hidden";
        error = false;
    }

    if (instrument == "none") {
        document.getElementById("instError").style.visibility = "visible";
        error = true;
    } else {
        document.getElementById("instError").style.visibility = "hidden";
        error = false;
    }

    if (location1 == "none") {
        document.getElementById("locaError").style.visibility = "visible";
        error = true;
    } else {
        document.getElementById("locaError").style.visibility = "hidden";
        error = false;
    }

    if (room == "") {
        document.getElementById("roomError").style.visibility = "visible";
        error = true;
    } else {
        document.getElementById("roomError").style.visibility = "hidden";
        error = false;
    }

    if (time == "none") {
        document.getElementById("timeError").style.visibility = "visible";
        error = true;
    } else {
        document.getElementById("timeError").style.visibility = "hidden";
        error = false;
    }

    if (error) {
        document.getElementById("display").innerHTML = "FAILED!";
        return false;

    } else {
        document.getElementById("display").innerHTML = "";

        var url = "http://localhost/ensayoPHP/musicPaola/assign13.php";
        let query = getQuery(myForm);
        getRequest2(url, data);
        console.log(query);
    }
}

function getQuery(myForm) {
    let data1 = new FormData(myForm);
    let type = data1.get("type");
    let first = data1.get("first_name");
    let last = data1.get("last_name");
    let studentId = data1.get("student_id");
    let level = data1.get("level");
    let instrument = data1.get("instrument");
    let location1 = data1.get("location");
    let room = data1.get("room");
    let time = data1.get("time");

    let first2 = data1.get("first_name_2");
    let last2 = data1.get("last_name_2");
    let studentId2 = data1.get("student_id_2");

    let query = "?type=" + type + "&first_name=" + first + "&last_name=" + last + "&id=" +
        studentId + "&level=" + level + "&instrument=" + instrument + "&location=" + location1 +
        "&room=" + room + "&time=" + time;

    query += "&first_name_2=" + first2 + "&last_name_2=" + last2 + "&student_id_2=" + studentId2;


    return query;
}

function getRequest(url) {
    var httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert("Http Request error!");
        return false;
    } else {

        httpRequest.onreadystatechange = () => {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);

                var output = "<table><tr><th>Type</th><th>First Name</th><th>Last Name</th><th>ID</th><th>Level</th><th>Instrument</th><th>Loaction</th><th>Time</th></tr>";
                //document.getElementById('display').innerHTML = url;

                for (var i = 0; i < data.length; i++) {
                    output += "<tr><td>" + data[i].type + "</td><td>" + data[i].first + "</td><td>" + data[i].last + "</td><td>" + data[i].id + "</td><td>" + data[i].level + "</td><td>" + data[i].instrument + "</td><td>" + data[i].location + "</td><td>" + data[i].time + "</td></tr>";

                    if (data[i].type == "duet") {
                        output += "<tr><td>" + data[i].type + "</td><td>" + data[i].first2 + "</td><td>" + data[i].last2 + "</td><td>" + data[i].id + "</td><td>" + data[i].level + "</td><td>" + data[i].instrument + "</td><td>" + data[i].location + "</td><td>" + data[i].time + "</td></tr>";
                    }
                }
            }
            output += "</table>";
            document.getElementById('display').innerHTML = output;

        };
        httpRequest.open("POST", url, true);
        httpRequest.send();
    }
}


/////
const getRequest2 = (url, form1) => {
    try {
        fetch(url, {
                method: 'POST',
                body: form1
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)

                var output = "<table><tr><th>Type</th><th>First Name</th><th>Last Name</th><th>ID</th><th>Level</th><th>Instrument</th><th>Loaction</th><th>Time</th></tr>";


                for (var i = 0; i < data.length; i++) {
                    output += "<tr><td>" + data[i].type + "</td><td>" + data[i].name + "</td><td>" + data[i].lastname + "</td><td>" + data[i].id + "</td><td>" + data[i].level + "</td><td>" + data[i].instrument + "</td><td>" + data[i].location + "</td><td>" + data[i].time + "</td></tr>";

                }
                output += "</table>";
                document.getElementById('display').innerHTML = output;
            });


    } catch (e) {
        console.log(e)
    }
}


function printInfo() {
    var output = "<table><tr><th>Type</th><th>First Name</th><th>Last Name</th><th>ID</th><th>Level</th><th>Instrument</th><th>Loaction</th><th>Room</th><th>Time</th></tr>";
    let type = document.querySelector('input[name=type]:checked').value;

    first = document.getElementById("first_name").value;
    last = document.getElementById("last_name").value;
    studentId = document.getElementById("student_id").value;
    level = document.getElementById("level").value;
    instrument = document.getElementById("instrument").value;
    location1 = document.getElementById("location").value;
    room = document.getElementById("room").value;
    time = document.getElementById("time").value;


    first2 = document.getElementById("first_name_2").value;
    last2 = document.getElementById("last_name_2").value;
    studentId2 = document.getElementById("student_id_2").value;

    output += "<tr><td>" + type + "</td><td>" + first + "</td><td>" + last + "</td><td>" +
        studentId + "</td><td>" + level + "</td><td>" + instrument + "</td><td>" + location1 +
        "</td><td>" + room + "</td><td>" + time + "</td></tr>";

    if (type == "duet") {
        output += "<tr><td>" + type + "</td><td>" + first2 + "</td><td>" + last2 + "</td><td>" +
            studentId2 + "</td><td>" + level + "</td><td>" + instrument + "</td><td>" + location1 +
            "</td><td>" + room + "</td><td>" + time + "</td></tr>";
    }

    output += "</table";
    document.getElementById('display').innerHTML = output;
    console.log("Entró")
}



myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    register();
});