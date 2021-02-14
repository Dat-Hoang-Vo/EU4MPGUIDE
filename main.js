function hoverFlag(country) {
    document.getElementById("infoname").innerHTML = country;

    if (country == 'France') {
        franceUpdateInfo();
    } else if (country == 'Russia') {
        russiaUpdateInfo();
    }
}

function franceUpdateInfo() {
    document.getElementById("infoname").innerHTML = "France";
    document.getElementById("infoname").className = "france";
    document.getElementById("flavor_text").innerHTML = 'The Legacy of Charlemagne';

    var allies = ['Castille', 'Milan'];
    var ally_list = document.getElementById("ally_list");

    for (i = 0; i < allies.length; i++) {
        var image = '"Flags/' + allies[i] + '.png"';
        var id = allies[i];
        if (i == 0) {
            ally_list.innerHTML =
                '<div class="country"><img src = ' + image + 'class="relatedflag"><p class="relatedname" id="' + id + '">' + id + '</p></div> ';
        } else {
            ally_list.innerHTML +=
                '<div class="country"><img src = ' + image + 'class="relatedflag"><p class="relatedname" id="' + id + '">' + id + '</p></div> ';
        }

    }
    var enemy_list = document.getElementById("enemy_list");
    enemy_list.innerHTML =
        '<div class="country"><img src = "Flags/England.png" class="relatedflag"><p class="relatedname" id="england">England</p></div> ';

    var traits = document.getElementById("traits");
    traits.innerHTML =
        '<div class="trait"><h4 class="trait_name good">Vassal Swarm</h4><p class="trait_description">The large amount of vassal states this country has benefits early game warfare.</p></div>'
    traits.innerHTML +=
        '<div class="trait"><h4 class="trait_name good">Large State</h4><p class="trait_description">This country is highly developed.</p></div>'
}

function russiaUpdateInfo() {
    document.getElementById("ally_list").innerHTML =
        '<div class="country"><img src = "Flags/Sweden.png" class="relatedflag"><p class="relatedname" id="sweden">Sweden</p></div> ';
}
