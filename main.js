var flavor_text;
var allies;
var enemies;
var modifier_type;
var modifier_value;
var trait_name;
var trait_rating;
var trait_description;


function hoverFlag(country) {
    document.getElementById("infoname").innerHTML = country;
    document.getElementById("infoname").className = country;

    flavor_text = 'Country Flavor';
    allies = [];
    enemies = [];
    modifier_type = [];
    modifier_value = [];

    trait_name = [];
    trait_rating = [];
    trait_description = [];

    if (country == 'France') {
        franceUpdateInfo();
    } else if (country == 'Russia') {
        russiaUpdateInfo();
    }
    document.getElementById("flavor_text").innerHTML = flavor_text;

    var edit_ally = document.getElementById("ally_list");
    if (allies.length > 0) {
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
    } else {
        edit_ally.innerHTML = '';
    }


    var edit_enemy = document.getElementById("enemy_list");
    if (enemies.length > 0) {
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
    } else {
        edit_enemy.innerHTML = '';
    }


    var edit_modifier = document.getElementById("modifier_field");
    if (modifier_type.length > 0) {
        for (i = 0; i < modifier_type.length; i++) {
            if (i == 0) {
                edit_modifier.innerHTML =
                    '<div class="modifier_text"><p class="modifier_type">' + modifier_type[i] + '</p><p class="modifier_value">' + modifier_value[i] + '</p></div>';
            } else {
                edit_modifier.innerHTML +=
                    '<div class="modifier_text"><p class="modifier_type">' + modifier_type[i] + '</p><p class="modifier_value">' + modifier_value[i] + '</p></div>';
            }
        }
    } else {
        edit_modifier.innerHTML = '';
    }


    var edit_trait = document.getElementById("traits");
    if (trait_name.length > 0) {
        for (i = 0; i < trait_name.length; i++) {
            if (i == 0) {
                edit_trait.innerHTML =
                    '<div class="trait"><h4 class="trait_name ' + trait_rating[i] + '">' + trait_name + '</h4><p class="trait_description">' + trait_description + '</p></div>'
            } else {

            }
        }
    } else {
        edit_trait.innerHTML = '';
    }


}

/*
flavor_text = 'Any text here';
allies['Valid', 'Country', 'Name'] Country name must be capitalized
enemies['Valid', 'Country', 'Name'] Country name must be capitalized
modifier_type = ['Modifer', 'Name']; No restrictions on naming convention
modifier_value = ['Modifer', 'Value']; No restrictions on naming convention

trait_name = ['Trait', 'Name']; No restrictions on naming convention
trait_rating = ['good', 'neutral', 'bad']; Select from given options
trait_description = ['Trait', 'Description']; No restrictions on naming convention
*/

function franceUpdateInfo() {
    flavor_text = 'Heart of Siene';
    allies = ['Castile', 'Milan', 'Burgundy'];
    enemies = ['England', 'Austria', 'Burgundy'];
    modifier_type = ['Morale', 'Discipline', 'Manpower Mod'];
    modifier_value = ['20%', '5%', '20%'];

    trait_name = [''];
    trait_rating = [''];
    trait_description = [''];
}

function russiaUpdateInfo() {

}
