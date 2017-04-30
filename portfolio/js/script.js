function getData(url, callback) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
var results = [];

getData('https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture', renderResults);

function renderResults(data) {

    var html = '';
    for (var i = 0; i < data["results"].length; i++) {
        var fullName = data["results"][i]["name"]["title"] + ' ' + data["results"][i]["name"]["first"] + ' ' + data["results"][i]["name"]["last"],
            name = data["results"][i]["name"]["first"] + ' ' + data["results"][i]["name"]["last"];
            img = data["results"][i]["picture"]["large"],
            imgM = data["results"][i]["picture"]["medium"];
        html += '<div class="col-md-2 block__user_on" onclick="myModal(this.id)" id="' + [i] + '"> ';
        html += '<img class="large" src="' + img + '" title="' + name + '"/>';
        html += '<img class="medium" id="medium" src="' + imgM + '" title="' + name + '"/>';
        html += '<p class="block__user_on-capitalize name block__user_on_pdtop">' + name + '</p>';
        html += '<p class="block__user_on-capitalize fullName block__user_on_pdtop">' + fullName + '</p>';
        html += '</div>';
    }
    document.getElementById("user").innerHTML = html;
    results = data["results"];

}
