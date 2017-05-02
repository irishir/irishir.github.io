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
    var nav = '';
    for (var i = 0; i < data["portfolio"].length; i++) {
        var img = data["portfolio"][i]["picture"]["index"],
            title = data["portfolio"][i]["name"]["title"];
            year = data["portfolio"][i]["name"]["year"];
        html += '<div class="col-lg-4 block-portfolio" onclick="myModal(this.id)" id="' + [i] + '"> ';
        html += '<img class="block-portfolio__img" src="' + img + '" title="' + title + '"/>';
        html += '<p class="block-portfolio__title">' + title + '</p>';
        html += '<p class="block-portfolio__yaer">' + year + '</p>';
        html += '</div>';
        nav += '<li onclick="myModal(this.id)" id="' + [i] + '">'+ title + '</li>';
    }
    document.getElementById("portfolio").innerHTML = html;
    document.getElementById("nav-bar").innerHTML = nav;

    portfolio = data["portfolio"];

}

getData('https://irishir.github.io/portfolio/js/index.json', renderPortfolio);

function myModal(index) {

    var data = portfolio[index];
    document.getElementById("Modal").style.display = "block";
    var modal = '',
        name = data.name.title,
        read = data.read_more.text_first;

    modal += '<div > ';
    modal += '<p class="">' + name + '</p>';
    modal += '<p class="">' + read + '</p>';
    modal += '</div>';

    document.getElementById("landing_info").innerHTML = modal;

}

function closeModal() {
    document.getElementById("Modal").style.display = "none";
}