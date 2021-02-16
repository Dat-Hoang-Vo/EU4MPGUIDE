let S_Rank = new Map();
S_Rank.set('France', 'active');
S_Rank.set('Muscovy', 'inactive');
S_Rank.set('England', 'inactive');
S_Rank.set('Ottomans', 'inactive');
S_Rank.set('Castile', 'inactive');

let A_Rank = new Map();
A_Rank.set('Austria', 'inactive');
A_Rank.set('Poland', 'inactive');
A_Rank.set('Mamluks', 'inactive');
A_Rank.set('Burgundy', 'inactive');

let B_Rank = new Map();
B_Rank.set('Sweden', 'inactive');
B_Rank.set('Brandenburg', 'inactive');
B_Rank.set('Milan', 'inactive');
B_Rank.set('Hungary', 'inactive');
B_Rank.set('Qara Qoyunlu', 'inactive');
B_Rank.set('Naples', 'inactive');
B_Rank.set('Hannover', 'inactive');
B_Rank.set('Portugal', 'inactive');

let C_Rank = new Map();
C_Rank.set('Florence', 'inactive');
C_Rank.set('Switzerland', 'inactive');
C_Rank.set('Denmark', 'inactive');
C_Rank.set('Papal States', 'inactive');

let D_Rank = new Map();
D_Rank.set('Morocco', 'inactive');
D_Rank.set('Tunis', 'inactive');
D_Rank.set('Great Horde', 'inactive');
D_Rank.set('Venice', 'inactive');
D_Rank.set('Genoa', 'inactive');

let F_Rank = new Map();
F_Rank.set('Rothenburg', 'inactive');
F_Rank.set('Holland', 'inactive');
F_Rank.set('Norway', 'inactive');
F_Rank.set('Livonian Order', 'inactive');
F_Rank.set('Georgia', 'inactive');

function generateTierList() {
    var modify_S_Tier = document.getElementById("S_BOX");
    generateTieredCountries(modify_S_Tier, S_Rank);

    var modifier_A_Tier = document.getElementById("A_BOX");
    generateTieredCountries(modifier_A_Tier, A_Rank);

    var modifier_B_Tier = document.getElementById("B_BOX");
    generateTieredCountries(modifier_B_Tier, B_Rank);

    var modifier_C_Tier = document.getElementById("C_BOX");
    generateTieredCountries(modifier_C_Tier, C_Rank);

    var modifier_D_Tier = document.getElementById("D_BOX");
    generateTieredCountries(modifier_D_Tier, D_Rank);

    var modifier_F_Tier = document.getElementById("F_BOX");
    generateTieredCountries(modifier_F_Tier, F_Rank);
}

function generateTieredCountries(addbox, Map) {
    Map.forEach((values, keys) => {
        var link = "";
        if (values == 'active') {
            link = 'href="' + keys + '.html"';
        }
        addbox.innerHTML +=
            '<div class="country">' +
            '<a ' + link + '>' +
            '<img src="Flags/' + keys + '.png" class="flag ' + values + '" onmouseover="hoverFlag(' + "'" + keys + "'" + ')">' +
            '<p class="country_name ' + keys + '">' + keys + '</p></a></div>';
    });
}








var flavor_text;
var allies;
var enemies;
var modifier_type;
var modifier_value;
var trait_name;
var trait_rating;
var trait_description;


function hoverFlag(country) {
    document.getElementById("quickinfoname").innerHTML = country;
    document.getElementById("quickinfoname").className = "country_name " + country;

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
                    '<div class="country_mini"><img src = ' + image + 'class="relatedflag relatedally"><p class="relatedcountryname primarytext ' + id + '">' + id + '</p></div> ';
            } else {
                edit_ally.innerHTML +=
                    '<div class="country_mini"><img src = ' + image + 'class="relatedflag relatedally"><p class="relatedcountryname primarytext ' + id + '">' + id + '</p></div> ';
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
                    '<div class="country_mini"><img src = ' + image + 'class="relatedflag relatedenemy"><p class="relatedcountryname primarytext ' + id + '">' + id + '</p></div> ';
            } else {
                edit_enemy.innerHTML +=
                    '<div class="country_mini"><img src = ' + image + 'class="relatedflag relatedenemy"><p class="relatedcountryname primarytext ' + id + '">' + id + '</p></div> ';
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
                    '<div><p class="modifier_text secondarytext">' + modifier_type[i] + '</p><p class="modifier_text secondarytext">' + modifier_value[i] + '</p></div>';
            } else {
                edit_modifier.innerHTML +=
                    '<div><p class="modifier_text secondarytext">' + modifier_type[i] + '</p><p class="modifier_text secondarytext">' + modifier_value[i] + '</p></div>';
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
                    '<div class="trait"><h4 class="trait_name ' + trait_rating[i] + '">' + trait_name[i] + '</h4><p class="trait_description primarytext">' + trait_description[i] + '</p></div>'
            } else {
                edit_trait.innerHTML +=
                    '<div class="trait"><h4 class="trait_name ' + trait_rating[i] + '">' + trait_name[i] + '</h4><p class="trait_description primarytext">' + trait_description[i] + '</p></div>'
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
    flavor_text = 'Legacy of Charlemagne';
    allies = ['Castile', 'Milan', 'Burgundy'];
    enemies = ['England', 'Austria', 'Burgundy'];
    modifier_type = ['Morale', 'Discipline', 'Manpower'];
    modifier_value = ['20%', '5%', '20%'];

    trait_name = ['French Hegemony',
        'French Musketeers',
        'Revolutionary Spirit',
        "The Hundred Years' War",
        'A Decentralized Realm',
        'The Costs of Power'];
    trait_rating = ['good',
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = ['France is in an exceptional position to dominate European politics if managed correctly. Few countries can step up to France one-on-one.',
        'During the Age of Absolutism the French gain access to unparalleled land firepower by way of musketeers.',
        'France has a unique event chain relating to the French Revolution of 1789. If played correctly, France could easily conquer what Napoleon dreamt of.',
        'The French begin in a deep rivalry with England and at a crossroads with Burgundy. Early diplomacy (or the lack thereof) will affect your game greatly.',
        'The French Kingdom begins the game divided amongst autonomous counts and dukes. This presents an opportunity to swarm your enemies at the cost of decentralization.',
        'France is routinely the target of coalitions due to its strong position. Make sure to keep an eye on your percieved aggressiveness.'];
}

function muscovyUpdateInfo() {
    flavor_text = 'An Endless March';
    allies = ['Sweden', 'Austria'];
    enemies = ['Ottomans', 'Poland', 'Brandenburg'];
    modifier_type = ['Morale', 'Discipline', 'Manpower', 'Land Forcelimit', 'Fire Received', 'Artillery Combat', 'Army Tradition'];
    modifier_value = ['5%', '5%', '53%', '50%', '-10%', '10%', '.25'];

    trait_name = ['Steppe Soldiers', 'All Roads Lead to Novgorod', 'Forever Eastern', 'Call of the Rus', 'The Central Block'];
    trait_rating = ['good', 'good', 'good', 'neutral', 'bad'];
    trait_description = [
        'The steppes feed your war machine. Receiving 100% manpower on all steppe provinces, you stand to field large armies when properly developed.',
        'Having the Novgorod trade node act as a de facto end node, you can build a strong production and trade economy without the worry of trade flowing away.',
        'Muscovy is given the privilege of unlimited expansion into the hordes to the east. This allows for you to quickly grow unapposed.',
        'A large amount of Russians live within the borders of Lithuania. While a great path for expansion, this will likely bring you conflict with Poland.',
        'With the help of Austria, Poland can pose a significant threat to you early on. Without careful diplomacy, you run the risk of destruction.'];
}



function englandUpdateInfo() {
    flavor_text = 'Naval Royalty';
    allies = ['Hannover', 'Burgundy', 'Austria'];
    enemies = ['France', 'Burgundy', 'Portugal', 'Denmark', 'Norway'];
    modifier_type = ['Naval Morale', 'Heavy Ship Combat', 'Morale', 'Discipline', 'Shock Received', 'Goods Produced', 'Cultured Advisor Cost'];
    modifier_value = ['20%', '15%', '10%', '5%', '-10%', '10%', '20%'];

    trait_name = ['An Island with an Ireland', 'Cloth Crops', 'Viking Saga Renewed', 'The Contested Channel', 'No Known Nobility'];
    trait_rating = ['good', 'good', 'neutral', 'neutral', 'bad'];
    trait_description = [
        'Most countries lack the naval capabilities to contest you at sea. This grants you high levels of protection and allows you to focus on developing your country.',
        'England has an abundance of farmlands as well as cloth production. This further enhances Englands capabilities to play tall.',
        'The war with the Nordics is not over. The Norwegian and Danish fleet pose a great threat to you. Starting as a stronger nation, a swift strike to conquer Scandinavia is a viable path for expansion. ',
        'Although England typically dominates the English Channel, a strong country in the low-lands can greatly reduce their control. A hostile Burgundy or the Netherlands can reduce your hold on the English channel to nearly half.',
        'England is one of the few monarchies to not have a nobility estate. This greatly reduces military capabilities in terms of manpower and military point generation.'
    ];
}

function ottomansUpdateInfo() {
    flavor_text = 'Ashes of the Purple Phoenix';
    allies = ['Tunis', 'Timurids'];
    enemies = ['Austria', 'Hungary', 'Poland', 'Mamluks', 'Persia'];
    modifier_type = ['Discipline', 'Land Forcelimit', 'Manpower Recovery'];
    modifier_value = ['5%', '33%', '10%'];

    trait_name = ['Janissaries',
        'Second Rome',
        'A New-Old World Order',
        'The Sand Fued',
        'Deus Vult'];
    trait_rating = ['good',
        'good',
        'good',
        'neutral',
        'bad'];
    trait_description = [
        'The Ottomans maintained one of the first expertly trained standing armies in the world. The Janissaries take 10% less damage and drill at double speed, but cost double to reinforce.',
        'By conquering the last strongholds of the Byzantine Empire, the Ottomans assume control of one of the most important cities in the world: Constantinople.',
        'The Ottoman Empire is in a formiddable position to restate the importance of Middle Eastern politics onto Europe. If played correctly, Europe will soon fear the Ottoman presence on the continent.',
        'The Ottomans begin in a deadly fued over control of the Middle East with the Mamluks. Only one successor to the Caliphate will remain once the dust settles.',
        'Europe has not forgotten the Jihads of the past. The Ottoman Empire faces risk of a unified European front containing not only the central block but other aspiring crusader states. The European threat can also present the opportunity for Middle Eastern rivals to strike.'
    ];
}


function castileUpdateInfo() {
    flavor_text = 'A Golden Crown';
    allies = ['Portugal', 'France', 'Naples'];
    enemies = ['Morocco', 'Tunis', 'Naples', 'Austria'];
    modifier_type = ['Morale', 'Artillery Fire', 'Discipline', 'Naval Forcelimit', 'Heavy Ship Combat'];
    modifier_value = ['15%', '+1', '5%', '25%', '10%'];

    trait_name = ['Golden Guns',
        'The Royal Armada',
        'The Unbreakable Tercio',
        'A Dynastic Opportunity',
        'The Heathen Threat'];
    trait_rating = ['good',
        'good',
        'good',
        'neutral',
        'bad'];
    trait_description = [
        'The Spanish were known for their gold. Not only is there a gold mine near Madrid, but Spain can also obtain gold by way of New World mines. There should be no shortages of gold.',
        'Iberia is able to muster a formiddable navy. With the right ideas and strategy, it may be able to rival the British fleet.',
        'During the Age of Reformation, Spain boasts one of the toughest armies in Europe. Cavalry charges are a thing of the past.',
        'Castile is in the perfect position to form a dynastic union over Aragon and extend influence over Italy. However, this can cause conflict with other strong countries who may have interests in Italy.',
        'Iberia is just off the cuff of many crusades. The redisual Islamic presence in the region can cause instability and early game difficulties.'
    ];
}
