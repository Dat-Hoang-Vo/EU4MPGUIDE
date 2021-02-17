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
B_Rank.set('Milan', 'inactive');
B_Rank.set('Brunswick', 'inactive');
B_Rank.set('Portugal', 'inactive');
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
    var modify_S_Tier = document.getElementById("S_TIER");
    generateTieredCountries(modify_S_Tier, S_Rank);

    var modifier_A_Tier = document.getElementById("A_TIER");
    generateTieredCountries(modifier_A_Tier, A_Rank);

    var modifier_B_Tier = document.getElementById("B_TIER");
    generateTieredCountries(modifier_B_Tier, B_Rank);

    var modifier_C_Tier = document.getElementById("C_TIER");
    generateTieredCountries(modifier_C_Tier, C_Rank);

    var modifier_D_Tier = document.getElementById("D_TIER");
    generateTieredCountries(modifier_D_Tier, D_Rank);

    var modifier_F_Tier = document.getElementById("F_TIER");
    generateTieredCountries(modifier_F_Tier, F_Rank);
}

function generateTieredCountries(addbox, Map) {
    Map.forEach((values, keys) => {
        var link = "";
        if (values == 'active') {
            link = 'href="' + keys + '.html"';
        }
        addbox.innerHTML +=
            '<div class="country ' + values + '">' +
            '<img src="CroppedFlags/' + keys + '.png" class="tierFlag" onmouseover="hoverFlag(' + "'" + keys + "'" + ')">' +
            '<p class="countryName" >' + keys + '</p ></div >'
    });
}


var new_allies;
var new_threats;
var country_motto;


function hoverFlag(country) {
    var new_quick_info_name = document.getElementById("quickInfoName");
    var modify_country_name = country.toUpperCase();
    new_quick_info_name.innerHTML = modify_country_name;

    country_motto = 'Country Flavor';
    new_allies = [];
    new_threats = [];

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
    }

    document.getElementById("quickInfoMotto").innerHTML = '"' + country_motto + '"';

    for (i = 1; i < 4; i++) {
        var new_flag = 'AllyIMG' + i;
        document.getElementById(new_flag).className = "relationsFlag";
        document.getElementById(new_flag).src = "CroppedFlags/" + new_allies[i - 1] + ".png";

        var new_ally_name = 'AllyName' + i;
        document.getElementById(new_ally_name).innerText = new_allies[i - 1];
    }

    for (i = 1; i < 4; i++) {
        var new_flag = 'threatsIMG' + i;
        document.getElementById(new_flag).className = "relationsFlag";
        document.getElementById(new_flag).src = "CroppedFlags/" + new_threats[i - 1] + ".png";

        var new_threat_name = 'threatsName' + i;
        document.getElementById(new_threat_name).innerText = new_threats[i - 1];
    }

    if (modifier_type.length > 0) {
        for (i = 0; i < modifier_type.length; i++) {
            if (i == 0) {
                document.getElementById('modifiersSplit').innerHTML =
                    '<div class="modifierUnit"><p class="modifier">' + modifier_type[i] + ' ' + modifier_value[i] + '</p></div>'
            } else {
                document.getElementById('modifiersSplit').innerHTML +=
                    '<div class="modifierUnit"><p class="modifier">' + modifier_type[i] + ' ' + modifier_value[i] + '</p></div>'
            }
        }
    }

    /*<div id="traits1" class="traits">
    <h2 class="traitsTitle">Pepee</h2>
    <p class="traitsText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque
        laborum eligendi aut
        dicta ratione quidem, cumque rerum reprehenderit dolore voluptas iusto quae a molestias,
        eveniet
        saepe ex adipisci voluptates.</p>
    </div>
    */

    if (trait_name.length > 0) {
        for (i = 0; i < trait_name.length; i++) {
            if (i == 0) {
                document.getElementById('traitsBox').innerHTML =
                    '<div class="traits"><h2 class="traitsTitle ' + trait_rating[i] + '">' + trait_name[i] + '</h2>' +
                    '<p class="traitsText">' + trait_description[i] + '</p></div>';
            } else {
                document.getElementById('traitsBox').innerHTML +=
                    '<div class="traits"><h2 class="traitsTitle ' + trait_rating[i] + '">' + trait_name[i] + '</h2>' +
                    '<p class="traitsText">' + trait_description[i] + '</p></div>';
            }
        }
    }

}

function franceUpdateInfo() {
    country_motto = 'Legacy of Charlemagne';
    new_allies = ['Burgundy', 'Castile', 'Poland'];
    new_threats = ['Burgundy', 'England', 'Austria'];
    modifier_type = ['Morale', 'Discipline', 'Manpower', 'Recovery'];
    modifier_value = ['20%', '5%', '20%', '10%'];

    trait_name = [
        'The Various Duchies',
        'Retake the Coast',
        'Your Younger Brother',
        'Weak Trade',
        'Blue Bloodbath'];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad',
        'bad'];
    trait_description = [
        'France starts in a peculiar position ruling over many minor vassals.Although this situation provides more troops per development, they are hard to control and often get stack wiped when mismanaged.',
        'The reconquest of Normandy and Bordeaux is vital to your survival. It is quite common for France to offer England 250 - 400 ducats to buy back these cores. You can often declare war with England before making this proposal unless they managed to amass a large alliance against you. An reliable ally is needed to avoid a bankruptcy war from here on.',
        "France's relationship with Burgundy should be decided before the game starts. Although you both hold eachother's cultured lands, it's possible to co-exist by focusing on Italy/Iberia and allowing Burgundy to expand into Germany or even England.",
        'France has an inherint lack of a unified end trade node that they can collect from. This leads to inefficient production dev that often seeps money into other nations such as England or Burgundy. This issue can be aleviated by conquering all of the Genoese trade node and pushing all trade there.',
        "Compared to most viable nations, France's main military bonus exist in their Elan morale boost. While useful early game, morale actually makes you lose more troops in the late game as weak divisions refuse to retreat. This on top of many other countries built in bonus damage can cause France to take higher than normal casualties."];
}

function muscovyUpdateInfo() {
    country_motto = 'An Endless March';
    new_allies = ['Sweden', 'Austria', 'Ottomans'];
    new_threats = ['Ottomans', 'Poland', 'Brandenburg'];
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
    country_motto = 'Naval Royalty';
    new_allies = ['Brunswick', 'Burgundy', 'Austria'];
    new_threats = ['France', 'Portugal', 'Norway'];
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
    country_motto = 'Ashes of the Purple Phoenix';
    new_allies = ['Tunis', 'Timurids', 'Morocco'];
    new_threats = ['Austria', 'Poland', 'Mamluks'];
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
    country_motto = 'A Golden Crown';
    new_allies = ['Portugal', 'France', 'Naples'];
    new_threats = ['Morocco', 'Tunis', 'Naples'];
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
    country_motto = 'An Imperial Court';
    new_allies = ['Poland', 'Brandenburg', 'England'];
    new_threats = ['Ottomans', 'Brandenburg', 'France'];
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
    country_motto = 'Dreams of Lotharingia';
    new_allies = ['France', 'Austria', 'England'];
    new_threats = ['France', 'Austria', 'Holland',];
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