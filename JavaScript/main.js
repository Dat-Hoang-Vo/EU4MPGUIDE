let S_Rank = new Map();
S_Rank.set('France', 'active');
S_Rank.set('Muscovy', 'inactive');
S_Rank.set('England', 'inactive');
S_Rank.set('Castile', 'inactive');
S_Rank.set('Ottomans', 'inactive');

let A_Rank = new Map();
A_Rank.set('Austria', 'inactive');
A_Rank.set('Poland', 'inactive');
A_Rank.set('Burgundy', 'inactive');
A_Rank.set('Mamluks', 'inactive');

let B_Rank = new Map();
B_Rank.set('Brandenburg', 'inactive');
B_Rank.set('Sweden', 'inactive');
B_Rank.set('Portugal', 'inactive');
B_Rank.set('Milan', 'inactive');
B_Rank.set('Brunswick', 'inactive');
B_Rank.set('Qara Qoyunlu', 'inactive');

let C_Rank = new Map();
C_Rank.set('Hungary', 'inactive');
C_Rank.set('Denmark', 'inactive');
C_Rank.set('Switzerland', 'inactive');
C_Rank.set('Florence', 'inactive');
C_Rank.set('Naples', 'inactive');
C_Rank.set('Papal States', 'inactive');
C_Rank.set('Hamburg', 'inactive')

let D_Rank = new Map();
D_Rank.set('Landshut', 'inactive');
D_Rank.set('Holland', 'inactive');
D_Rank.set('Venice', 'inactive');
D_Rank.set('Genoa', 'inactive');
D_Rank.set('Morocco', 'inactive');
D_Rank.set('Tunis', 'inactive');

let F_Rank = new Map();
F_Rank.set('Norway', 'inactive');
F_Rank.set('Rothenburg', 'inactive');
F_Rank.set('Livonian Order', 'inactive');
F_Rank.set('Georgia', 'inactive');
F_Rank.set('Great Horde', 'inactive');

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
    document.getElementById("quickinfoname").className = "country_name secondarytext " + country;

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
    } else if (country == 'Austria') {
        austriaUpdateInfo();
    } else if (country == 'Burgundy') {
        burgundyUpdateInfo();
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
    modifier_type = ['Morale', 'Discipline', 'Manpower', 'Manpower Recovery'];
    modifier_value = ['20%', '5%', '20%', '10%'];

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
        'During the Age of Absolutism the French gain access to unparalleled land firepower by way of royal musketeers. French Musketeers provide an increased 20% land fire damage.',
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
    allies = ['Brunswick', 'Burgundy', 'Austria'];
    enemies = ['France', 'Portugal', 'Norway'];
    modifier_type = ['Naval Morale', 'Heavy Ship Combat', 'Morale', 'Discipline', 'Shock Received', 'Goods Produced', 'Cultured Advisor Cost'];
    modifier_value = ['20%', '15%', '10%', '5%', '-10%', '10%', '20%'];

    trait_name = ['An Island with an Ireland', 'The Bank of England', 'Viking Saga Renewed', 'The Contested Channel', 'No Known Nobility'];
    trait_rating = ['good', 'good', 'neutral', 'neutral', 'bad'];
    trait_description = [
        'Most countries lack the naval capabilities to contest you at sea. This grants the English high levels of protection and allows them to focus on developing their country.',
        'England is easily able to become a global economic hegemon. By the use of the Royal Navy and the strong trade goods on English soil, the English Channel has exceptional potential. A strong naval presence and colonial presence will be paramount.',
        'The war with the Nordics is not over. The Norwegian and Danish fleet pose a great threat to the English. Starting as a stronger nation, a swift strike to conquer Scandinavia is a viable path for expansion. ',
        'Although England typically dominates the English Channel, a strong country in the lowlands can greatly reduce their control. A hostile Burgundy or the Netherlands can reduce your hold on the English channel to nearly half.',
        'England is one of the few monarchies to not have a nobility estate. This greatly reduces military capabilities in terms of manpower and military point generation.'
    ];
}

function ottomansUpdateInfo() {
    flavor_text = 'Ashes of the Purple Phoenix';
    allies = ['Tunis', 'Timurids'];
    enemies = ['Austria', 'Poland', 'Mamluks'];
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
    enemies = ['Morocco', 'Tunis', 'Naples'];
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
        'During the Age of Reformation, Spain boasts one of the toughest armies in Europe. With 30% less shock damage cavalry charges are a thing of the past.',
        'Castile is in the perfect position to form a dynastic union over Aragon and extend influence over Italy. However, this can cause conflict with other strong countries who may have interests in Italy.',
        'Iberia is just off the cuff of many crusades. The redisual Islamic presence in the region can cause instability and early game difficulties.'
    ];
}


function austriaUpdateInfo() {
    flavor_text = 'An Imperial Court';
    allies = ['Poland', 'Brandenburg', 'England'];
    enemies = ['Ottomans', 'Brandenburg', 'France'];
    modifier_type = ['Morale', 'Reinforce Speed', 'Discipline'];
    modifier_value = ['10%', '30%', '3%'];

    trait_name = ['Imperial Troops',
        'Three Crowns',
        'Defend the Emperor!',
        'Not Holy, Roman, Nor an Empire',
        'Enemies on All Fronts'];
    trait_rating = ['good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        'Aided by the realms of the Empire, Austria can maintain a sizeable army. Austrian reserves are equally as imposing. Make sure to keep an eye on how many princes reign in the HRE as this directly affects the manpower and forcelimit benefit.',
        'Austria has unique event chains allowing it to claim the crowns of both Bohemia and Hungary. If played correctly, Austria can create a new empire all for itself.',
        'Located in the Alps, Austria has immense geographical defenses similar to Switzerland. However, this rocky terrain is harder to develop than other terrain. This can be alleviated by the farmland present in Bohemia and Hungary.',
        'The power of wearing the imperial crown is not free. Austria must manage internal HRE politics such as the votes of electors. While the HRE provides economic and military advantages, it also requires attentive micro-managing.',
        'Austria is surrounded by rivaling powers. To the West, France seeks to honor the legacy of Charlemagne. To the East, Russia and Poland struggle over dominance, and the Ottomans may try to add a new imperial city to their realm. To the South, the question of imperial loyalty may become a problem. To the North, Brandenburg may seek to remodel the HRE in its image.'
    ];
}


function burgundyUpdateInfo() {
    flavor_text = 'Dreams of Lotharingia';
    allies = ['France', 'Austria', 'England'];
    enemies = ['France', 'Austria', 'Holland',];
    modifier_type = ['Morale', 'Discipline', 'Manpower', 'Goods Produced'];
    modifier_value = ['10%', '5%', '25%', '15%'];

    trait_name = ['The Burgundian Bloodline',
        'An Army for Hire'];
    trait_rating = ['good',
        'good'];
    trait_description = [
        'At the start of the game Burgundy begins with royal unions on three lowland countries. Burgundy can use their unions to great benefit in early wars, and can develop the rich land for themselves later on.',
        'The Burgundian crown has gotten used to using unconventional means to survive. Burgundy is able to maintain a mercenary army 15% cheaper and with 50% more manpower.'
    ];
}
