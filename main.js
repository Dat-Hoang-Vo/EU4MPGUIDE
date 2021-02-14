var flavor_text;
var allies;
var enemies;


function hoverFlag(country) {
    document.getElementById("infoname").innerHTML = country;
    document.getElementById("infoname").className = country;

    if (country == 'France') {
        franceUpdateInfo();
    } else if (country == 'Russia') {
        russiaUpdateInfo();
    }
    document.getElementById("flavor_text").innerHTML = flavor_text;

    var edit_ally = document.getElementById("ally_list");
    for (i = 0; i < allies.length; i++) {
        var image = '"Flags/' + allies[i] + '.png"';
        var id = allies[i];
        if (i == 0) {
            edit_ally.innerHTML =
                '<div class="country"><img src = ' + image + 'class="relatedflag"><p class="relatedname ' + id + '">' + id + '</p></div> ';
        } else {
            edit_ally.innerHTML +=
                '<div class="country"><img src = ' + image + 'class="relatedflag"><p class="relatedname ' + id + '">' + id + '</p></div> ';
        }
    }

    var edit_enemy = document.getElementById("enemy_list");
    for (i = 0; i < enemies.length; i++) {
        var image = '"Flags/' + enemies[i] + '.png"';
        var id = enemies[i];
        if (i == 0) {
            edit_enemy.innerHTML =
                '<div class="country"><img src = ' + image + 'class="relatedflag"><p class="relatedname ' + id + '">' + id + '</p></div> ';
        } else {
            edit_enemy.innerHTML +=
                '<div class="country"><img src = ' + image + 'class="relatedflag"><p class="relatedname ' + id + '">' + id + '</p></div> ';
        }
    }

}

function franceUpdateInfo() {
    flavor_text = 'Heart of Siene';
    allies = ['Castille', 'Milan', 'Burgundy'];
    enemies = ['England', 'Austria', 'Burgundy']

    var traits = document.getElementById("traits");
    traits.innerHTML =
        '<div class="trait"><h4 class="trait_name good">Vassal Swarm</h4><p class="trait_description">Testinggg France</p></div>'
    traits.innerHTML +=
        '<div class="trait"><h4 class="trait_name good">Large State</h4><p class="trait_description">This country starts out with high dev</p></div>'
}

function russiaUpdateInfo() {
    document.getElementById("ally_list").innerHTML =
        '<div class="country"><img src = "Flags/Sweden.png" class="relatedflag"><p class="relatedname" id="sweden">Sweden</p></div> ';
}
