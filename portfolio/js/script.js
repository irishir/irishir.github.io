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
var portfolio = [];


function renderPortfolio(data) {

    var html = '';
    for (var i = 0; i < data["portfolio"].length; i++) {
        var img = data["portfolio"][i]["picture"]["index"],
            title = data["portfolio"][i]["name"]["title"];
            year = data["portfolio"][i]["name"]["year"];
        html += '<div class="col-md-2 block__user_on" onclick="myModal(this.id)" id="' + [i] + '"> ';
        html += '<img class="large" src="' + img + '" title="' + title + '"/>';
        html += '<p class="block__user_on-capitalize name block__user_on_pdtop">' + title + '</p>';
        html += '<p class="block__user_on-capitalize fullName block__user_on_pdtop">' + year + '</p>';
        html += '</div>';
    }
    document.getElementById("portfolio").innerHTML = html;
    portfolio = data["portfolio"];

}

getData('https://www.github.com/irishir/irishir.github.io/blob/master/portfolio/js/index.json', renderPortfolio);
