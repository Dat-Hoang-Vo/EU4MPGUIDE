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
    } else if (country == 'Muscovy') {
        muscovyUpdateInfo();
    } else if (country == 'England') {
        englandUpdateInfo();
    } else if (country == 'Ottomans') {
        ottomansUpdateInfo();
    } else if (country == 'Castile') {
        castileUpdateInfo();
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
                    '<div class="trait"><h4 class="trait_name ' + trait_rating[i] + '">' + trait_name[i] + '</h4><p class="trait_description">' + trait_description[i] + '</p></div>'
            } else {
                edit_trait.innerHTML +=
                    '<div class="trait"><h4 class="trait_name ' + trait_rating[i] + '">' + trait_name[i] + '</h4><p class="trait_description">' + trait_description[i] + '</p></div>'
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
    flavor_text = 'The Legacy of Charlemagne';
    allies = ['Castile', 'Milan', 'Burgundy'];
    enemies = ['England', 'Austria', 'Burgundy'];
    modifier_type = ['Morale', 'Discipline', 'Manpower'];
    modifier_value = ['20%', '5%', '20%'];

    trait_name = ['The Hundred Years War',
        ' French Hegemony',
        ' French Musketeers',
        ' Revolutionary Spirit',
        ' The Costs of Power'];
    trait_rating = ['neutral',
        'good',
        'good',
        'good',
        'bad'];
    trait_description = ['The French begin in a deep rivalry with England and at a crossroads with Burgundy. Early diplomacy (or the lack thereof) will affect your game greatly.',
        'France is in an exceptional position to dominate European politics if managed correctly. Few countries can step up to France one-on-one.',
        'During the Age of Absolutism the French gain access to unparalleled land firepower by way of musketeers.',
        'France has a unique event chain relating to the French Revolution of 1789. If played correctly, France could easily conquer what Napoleon dreamt of.',
        'France is routinely the target of coalitions due to its strong position. Make sure to keep an eye on your percieved aggressiveness.'];
}

function muscovyUpdateInfo() {
    flavor_text = 'The Endless March';
    allies = ['Sweden', 'Austria'];
    enemies = ['Ottomans', 'Poland', 'Brandenburg'];
    modifier_type = ['Morale', 'Discipline', 'Manpower Mod', 'Land Forcelimit', 'Fire Received', 'Artillery Combat', 'Army Tradition'];
    modifier_value = ['5%', '5%', '53%', '50%', '-10%', '10%', '.25'];

    trait_name = ['Steppe Soldiers', 'All Roads Lead to Novgorod', 'Forever Eastern', 'Call of the Rus', 'The Central Block'];
    trait_rating = ['good', 'good', 'good', 'neutral', 'bad'];
    trait_description = [
        'The steppes feed your war machine. Receiving 100% manpower on all steppe provinces, you stands to field large armies when properly developed.',
        'Having the Novgorod trade node act as a de facto end node, you can build a strong production and trade economy without the worry of trade flowing away.',
        'Muscovy is given the privilage of unlimited expansion into the hordes to the east. This allows for you to quickly grow unapposed.',
        'A large amount of Russians live within the borders of Lithuania. While a great path for expansion, this will likely bring you conflict with Poland.',
        'Poland with the help of Austria can pose a significant threat to you early on. Without careful diplomacy, you run the risk of extermination.'];
}



function englandUpdateInfo() {
    flavor_text = 'The Queen of the Seas';
    allies = ['Hannover', 'Portugal', 'Austria', 'Burgundy'];
    enemies = ['France', 'Norway', 'Denmark', 'Burgundy'];
    modifier_type = ['Morale', 'Discipline', 'Shock Received', 'Goods Produced', 'Cultured Advisor Cost'];
    modifier_value = ['10%', '5%', '-10%', '10%', '20%'];

    trait_name = ['Island with an Ireland', 'Cloth Crops', 'Viking Saga Renewed', 'The Contested Channel', 'No Known Nobility'];
    trait_rating = ['good', 'good', 'neutral', 'neutral', 'bad'];
    trait_description = [
        'Most nations lack the naval capabilities to contest you at sea. This grants you high levels of protection and allows you to focus on developing your country.',
        'England has an abundance of farmlands as well as cloth production. This further enhances Englands capabilities to play tall.',
        'The war with the Nordics is not over. The Norwegian and Danish fleet pose a great threat to you. Starting as a stronger nation, a swift strike to conquer scandinavia is a viable path for expansion. ',
        'Although England typically dominates the English Channel, a strong country in the low-lands can greatly reduce their control. A hostile Burgundy or Dutch can reduce your hold on the English channel to nearly half.',
        'England is one of the few monarchies to not have a Nobility Estate. This greatly reduces military capabilities in terms of manpower and mil point generations.'
    ];
}

function ottomansUpdateInfo() {
    flavor_text = 'Ashes of the Purple Phoenix';
    allies = ['Tunis', 'Timurids'];
    enemies = ['Austria', 'Hungary', 'Poland', 'Mamluks', 'Persia'];
    modifier_type = ['Discipline', 'Land Forcelimit', 'Manpower Recovery'];
    modifier_value = ['5%', '33%', '10%'];

    trait_name = ['Janissaries'];
    trait_rating = ['good'];
    trait_description = [
        'The Ottomans maintained one of the first expertly trained standing armies in the world. The Janissaries take 10% less damage and drill at double speed, but cost double to reinforce.',
    ];
}


function castileUpdateInfo() {
    flavor_text = 'A Golden Crown';
    allies = ['Portugal', 'France', 'Naples'];
    enemies = ['Morocco', 'Tunis', 'Austria', 'Naples'];
    modifier_type = ['Morale', 'Artillery Fire', 'Discipline'];
    modifier_value = ['15%', '+1', '5%'];

    trait_name = ['A Dynastic Opportunity',
        'Golden Guns',
        'The Royal Armada',
        'The Unbreakable Tercios',
        'The Heathen Threat'];
    trait_rating = ['neutral',
        'good',
        'good',
        'good',
        'bad'];
    trait_description = [
        'Castile is in the perfect position to form a dynastic union over Aragon and extend influence over Italy. However, this can cause conflict with other strong countries who may have interests in Italy.',
        'The Spanish were known for their gold. Not only is there a gold mine near Madrid, but Spain can also obtain gold by way of New World mines. There should be no shortages of gold.',
        'Iberia is able to muster a formiddable navy. With the right ideas and strategy, it may be able to rival the British fleet.',
        'During the Age of Reformation, Spain boasts one of the toughest armies in Europe. Cavalry charges are a thing of the past.',
        'Iberia is just off the cuff of many crusades. The redisual Islamic presence in the region can cause instability and early game difficulties.'
    ];
}
