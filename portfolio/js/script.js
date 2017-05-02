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
        landing = data.picture.landing;
        landing_404 = data.picture.landing_404;
        paragraf_1 = data.read_more.paragraf_1;
        paragraf_2 = data.read_more.paragraf_2;
        paragraf_3 = data.read_more.paragraf_3;
        paragraf_4 = data.read_more.paragraf_4;
        paragraf_5 = data.read_more.paragraf_5;
        paragraf_6 = data.read_more.paragraf_6;
        paragraf_7 = data.read_more.paragraf_7;
        link_1 = data.read_more.link_1;
        link_2 = data.read_more.link_2;
        link_3 = data.read_more.link_3;
        link_4 = data.read_more.link_4;
        link_5 = data.read_more.link_5;

    modal += '<div > ';
    modal += '<p class="block-portfolio__modal-title">' + name + '</p>';
    modal += '<p class="block-portfolio__modal-subtitle">' + read + '</p>';
    if(typeof landing_404 === 'undefined'){

    }else{
        modal += '<img class="block-portfolio__modal-img" src="' + landing_404 + '" >';
    }
    modal += '<img class="block-portfolio__modal-img" src="' + landing + '" >';
    if(typeof paragraf_1 === 'undefined' && paragraf_2 === 'undefined' && paragraf_3 === 'undefined' && paragraf_4 === 'undefined' && paragraf_5 === 'undefined' && paragraf_6 === 'undefined' && paragraf_7 === 'undefined' && link_1 === 'undefined' && link_2 === 'undefined' && link_3 === 'undefined' && link_4 === 'undefined' && link_5 === 'undefined'){

    }else{
        modal += '<p>' + paragraf_1 + '</p>';
        modal += '<p>' + paragraf_2 + '</p>';
        modal += '<p>' + paragraf_3 + '</p>';
        modal += '<p>' + paragraf_4 + '</p>';
        modal += '<p>' + paragraf_5 + '</p>';
        modal += '<p>' + paragraf_6 + '</p>';
        modal += '<p>' + paragraf_7 + '</p>';
        modal += '<p>' + link_1 + '</p>';
        modal += '<p>' + link_2 + '</p>';
        modal += '<p>' + link_3 + '</p>';
        modal += '<p>' + link_4 + '</p>';
        modal += '<p>' + link_5 + '</p>';

    }
    modal += '</div>';

    document.getElementById("landing_info").innerHTML = modal;

}

function closeModal() {
    document.getElementById("Modal").style.display = "none";
}