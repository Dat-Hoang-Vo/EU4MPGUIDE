var S_Rank = new Map();
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

//var test = ['France', 'England', 'Muscovy'];
let test = Array.from(S_Rank.keys());



function generateTierList() {


    let e = React.createElement;

    class tierListBox extends React.Component {


        render() {
            return e(
                'div', null,
                React.createElement('h2', { className: "tierName" },
                    React.createElement('span', { id: "S" }, "S"),
                    " TIER"
                ),
                React.createElement('div', { id: "S_TIER", className: "countryBox" },
                    test.map(name => {
                        return (
                            React.createElement('div', { className: "country " + S_Rank.get(name) },
                                React.createElement('img', { src: "CroppedFlags/" + name + ".png", className: "tierFlag", onmouseover: "hoverFlag('" + name + "')" + '"' }),
                                React.createElement('p', { className: "countryName" }, name)
                            )
                        )
                    }
                    )
                )
            );
        }
    }

    const tierContainer = document.querySelector('#tierContent');
    ReactDOM.render(e(tierListBox), tierContainer);

}

var new_allies;
var new_threats;
var country_name;
var country_motto;


function hoverFlag(country) {
    var new_quick_info_name = document.getElementById("quickInfoName");
    var modify_country_name = country.toUpperCase();
    new_quick_info_name.innerHTML = modify_country_name;


    country_name = country;
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
    } else if (country == 'Burgundy') {
        burgundyUpdateInfo();
    } else if (country == 'Poland') {
        polandUpdateInfo();
    } else if (country == 'Mamluks') {
        mamluksUpdateInfo();
    } else if (country == 'Brandenburg') {
        brandenburgUpdateInfo();
    } else if (country == 'Sweden') {
        swedenUpdateInfo();
    } else if (country == 'Milan') {
        milanUpdateInfo();
    } else if (country == 'Brunswick') {
        brunswickUpdateInfo();
    } else if (country == 'Portugal') {
        portugalUpdateInfo();
    } else if (country == 'Qara Qoyunlu') {
        qaraQoyunluUpdateInfo();
    } else if (country == 'Hungary') {
        hungaryUpdateInfo();
    } else if (country == 'Denmark') {
        denmarkUpdateInfo();
    } else if (country == 'Switzerland') {
        switzerlandUpdateInfo();
    } else if (country == 'Papal States') {
        papalStatesUpdateInfo();
    } else if (country == 'Naples') {
        naplesUpdateInfo();
    } else if (country == 'Hamburg') {
        hamburgUpdateInfo();
    } else if (country == 'Landshut') {
        landshutUpdateInfo();
    } else if (country == 'Holland') {
        hollandUpdateInfo();
    } else if (country == 'Venice') {
        veniceUpdateInfo();
    } else if (country == 'Genoa') {
        genoaUpdateInfo();
    } else if (country == 'Norway') {
        norwayUpdateInfo();
    } else if (country == 'Rothenburg') {
        rothenburgUpdateInfo();
    } else if (country == 'Livonian Order') {
        livonianOrderUpdateInfo();
    } else if (country == 'Great Horde') {
        greatHordeUpdateInfo();
    } else if (country == 'Florence') {
        florenceUpdateInfo();
    } else if (country == 'Georgia') {
        georgiaUpdateInfo();
    } else if (country == 'Morocco') {
        moroccoUpdateInfo();
    } else if (country == 'Tunis') {
        tunisUpdateInfo();
    }

    let e = React.createElement;

    class quickInfoBox extends React.Component {
        render() {
            return e(
                'div', { id: "quickInfoContentTopLayer" },
                React.createElement('div', { id: "nameBox" },
                    React.createElement('div', { id: "nameContainer" },
                        React.createElement('img', { src: "Images/Left_Leaf.png" }),
                        React.createElement('span', { className: "leafgap" }),
                        React.createElement('p', { id: "quickInfoName" }, country_name),
                        React.createElement('span', { className: "leafgap" }),
                        React.createElement('img', { src: "Images/Right_Leaf.png" })),
                    React.createElement('h3', { id: "quickInfoMotto" }, '"' + country_motto + '"')
                ),
                React.createElement('div', { id: "relationsBox" },
                    React.createElement('div', { id: "Allies", className: "relationsSplit" },
                        React.createElement('h3', { id: "AlliesHeader" }, "Suggested Allies"),
                        React.createElement('div', { id: "AlliesFlagBox", className: "relationsFlagBox" },
                            React.createElement('div', { id: "Ally1", className: "relationsCountry" },
                                React.createElement('img', { id: "AllyIMG1", className: "relationsFlag", src: "CroppedFlags/" + new_allies[0] + ".png" }),
                                React.createElement('h4', { id: "AllyName1", className: "relationsName" }, new_allies[0])),
                            React.createElement('div', { id: "Ally2", className: "relationsCountry" },
                                React.createElement('img', { id: "AllyIMG2", className: "relationsFlag", src: "CroppedFlags/" + new_allies[1] + ".png" }),
                                React.createElement('h4', { id: "AllyName2", className: "relationsName" }, new_allies[1]),
                            ),
                            React.createElement('div', { id: "Ally3", className: "relationsCountry" },
                                React.createElement('img', { id: "AllyIMG3", className: "relationsFlag", src: "CroppedFlags/" + new_allies[2] + ".png" }),
                                React.createElement('h4', { id: "AllyName3", className: "relationsName" }, new_allies[2]),
                            )
                        )
                    ),
                    React.createElement('div', { id: "threats", className: "relationsSplit" },
                        React.createElement('h3', { id: "threatsHeader" }, "Common Threats"),
                        React.createElement('div', { id: "threatsFlagBox", className: "relationsFlagBox" },
                            React.createElement('div', { id: "threats1", className: "relationsCountry" },
                                React.createElement('img', { id: "threatsIMG1", className: "relationsFlag", src: "CroppedFlags/" + new_threats[0] + ".png" }),
                                React.createElement('h4', { id: "threatsName1", className: "relationsName" }, new_threats[0])),
                            React.createElement('div', { id: "threats2", className: "relationsCountry" },
                                React.createElement('img', { id: "threatsIMG2", className: "relationsFlag", src: "CroppedFlags/" + new_threats[1] + ".png" }),
                                React.createElement('h4', { id: "threatsName2", className: "relationsName" }, new_threats[1]),
                            ),
                            React.createElement('div', { id: "threats3", className: "relationsCountry" },
                                React.createElement('img', { id: "threatsIMG3", className: "relationsFlag", src: "CroppedFlags/" + new_threats[2] + ".png" }),
                                React.createElement('h4', { id: "threatsName3", className: "relationsName" }, new_threats[2]),
                            )
                        )
                    )
                ),
                React.createElement('div', { id: "modifiersBox" },
                    React.createElement('h3', { id: "modifiersTitle" }, "MODIFIERS"),
                    React.createElement('div', { id: "modifiersSplit" },
                        modifier_type.map((name, index) => {
                            return (
                                React.createElement('div', { className: "modifierUnit" },
                                    React.createElement('p', { className: "modifier" }, name + " " + modifier_value[index])
                                )
                            )
                        })
                    )
                ),
                React.createElement('div', { id: "traitsBox" },
                    trait_name.map((name, index) => {
                        return (
                            React.createElement('div', { className: "traits" },
                                React.createElement('h2', { className: "traitsTitle " + trait_rating[index] }, name),
                                React.createElement('p', { className: "traitsText" }, trait_description[index])
                            )
                        )
                    }
                    )
                )
            );
        }
    }

    const domContainer = document.querySelector('#quickInfoContent');
    ReactDOM.render(e(quickInfoBox), domContainer);

    /*<div id="traits1" class="traits">
    <h2 class="traitsTitle">Pepee</h2>
    <p class="traitsText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque
        laborum eligendi aut
        dicta ratione quidem, cumque rerum reprehenderit dolore voluptas iusto quae a molestias,
        eveniet
        saepe ex adipisci voluptates.</p>
    </div>
    */

}

function franceUpdateInfo() {
    country_motto = 'Legacy of Charlemagne';
    new_allies = ['Castile', 'Milan', 'Burgundy'];
    new_threats = ['England', 'Austria', 'Burgundy'];

    modifier_type = ['Morale', 'Discipline', 'Manpower', 'Manpower Recovery'];
    modifier_value = ['20%', '5%', '20%', '10%'];

    trait_name = ['French Hegemony',
        'Victory Through Valor - "Pour le Roi!"',
        "The Hundred Years' War",
        'A Decentralized Realm',
        'The Costs of Power'];
    trait_rating = ['good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = ['France is in an exceptional position to dominate European politics if managed correctly. Few countries can step up to France one-on-one. France also gets a myriad of events relating to to its historical dominance of Europe, including the French Revolution.',
        'France fields an army unlike many others. Its soldiers fight with unwavering fortitude. Despite the advantages of this attribute, it can lead to mass casualties as morale fades and discipline becomes dominant.',
        'The French begin in a deep rivalry with England and at a crossroads with Burgundy. The ineptitude of the English King presents a rare opportunity to reclaim French cores. Early diplomacy (or the lack thereof) with Burgundy will greatly affect your game.   ',
        'The French Kingdom begins the game divided amongst autonomous counts and dukes. This presents an opportunity to swarm your enemies at the cost of decentralization. The French vassal troops are hard to control and are easily wiped while seperated.',
        'France is routinely the target of coalitions due to its strong position. Make sure to keep an eye on your percieved aggressiveness.'];
}


function muscovyUpdateInfo() {
    country_motto = 'An Endless March';
    new_allies = ['Sweden', 'Austria', 'England'];
    new_threats = ['Poland', 'Brandenburg', 'Ottomans'];
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
    new_allies = ['Brunswick', 'Burgundy', 'Muscovy'];
    new_threats = ['Portugal', 'Burgundy', 'Norway'];
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
    new_threats = ['Mamluks', 'Hungary', 'Muscovy'];
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
        'By conquering the last strongholds of the Byzantine Empire, the Ottomans assume control of one of the most important cities in the world: Constantinople. This city can bring lucrative trade wealth to the Empire.',
        'The Ottoman Empire is in a formiddable position to restate the importance of Middle Eastern politics onto Europe. If played correctly, Europe will soon fear the Ottoman presence on the continent.',
        'The Ottomans begin in a deadly fued over control of the Middle East with the Mamluks. Only one successor to the Caliphate will remain once the dust settles.',
        'Europe has not forgotten the Jihads of the past. The Ottoman Empire faces risk of a unified European front containing not only the central block but other aspiring crusader states. The European threat can also present the opportunity for Middle Eastern rivals to strike.'
    ];
}


function castileUpdateInfo() {
    country_motto = 'A Golden Crown';
    new_allies = ['France', 'Portugal', 'Papal States'];
    new_threats = ['France', 'Morocco', 'Tunis'];
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
    new_allies = ['Poland', 'Brandenburg', 'Papal States'];
    new_threats = ['France', 'Burgundy', 'Ottomans'];
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
    new_threats = ['France', 'Austria', 'England',];
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


function polandUpdateInfo() {
    country_motto = '';
    new_allies = ['Austria', 'Brandenburg', 'Sweden'];
    new_threats = ['Austria', 'Muscovy', 'Ottomans',];
    modifier_type = ['Discipline', 'Morale', 'Infantry', 'Cavalry', 'Manpower'];
    modifier_value = ['5%', '15%', '10%', '33%', '25%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function mamluksUpdateInfo() {
    country_motto = '';
    new_allies = ['Qara Qoyunlu', 'Tunis', 'Rassids'];
    new_threats = ['Ottomans', 'Tunis', 'Ethiopia',];
    modifier_type = ['Discipline', 'Cavalry', 'Recovery'];
    modifier_value = ['5%', '10%', '15%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function brandenburgUpdateInfo() {
    country_motto = '';
    new_allies = ['Austria', 'Poland', 'Muscovy'];
    new_threats = ['Hannover', 'Poland', 'Sweden',];
    modifier_type = ['Discipline', 'Morale', 'Infantry', 'Manpower', 'Recovery', 'Tradition', 'Decay', 'Devolopment', 'Monarch Mil'];
    modifier_value = ['15%', '20%', '20%', '25%', '20%', '0.5', '-2%', '5%', '3'];

    trait_name = ['',
        ''];
    trait_rating = ['good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function swedenUpdateInfo() {
    country_motto = '';
    new_allies = ['Muscovy', 'Austria', 'England'];
    new_threats = ['Muscovy', 'Brandenburg', 'England',];
    modifier_type = ['Morale', 'Infantry', 'Manpower', 'Recovery', 'Leader Shock', 'Goods Produced'];
    modifier_value = ['5%', '20%', '20%', '20%', '1', '10%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function milanUpdateInfo() {
    country_motto = '';
    new_allies = ['Austria', 'Naples', 'France'];
    new_threats = ['Florence', 'Switzerland', 'France',];
    modifier_type = ['Discipline', 'Manpower', 'Morale', 'Development'];
    modifier_value = ['5%', '25%', '5%', '10%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function brunswickUpdateInfo() {
    country_motto = '';
    new_allies = ['Austria', 'England', 'Sweden'];
    new_threats = ['Burgundy', 'Brandenburg', 'Denmark',];
    modifier_type = ['Fire Received', 'Discipline', 'Fire Damage', 'Goods Produced', 'Development'];
    modifier_value = ['-15%', '5%', '5%', '10%', '10%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function portugalUpdateInfo() {
    country_motto = '';
    new_allies = ['Castile', 'England', 'France'];
    new_threats = ['Castile', 'England', 'Morocco',];
    modifier_type = ['Artillery', 'Goods'];
    modifier_value = ['10%', '10%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function qaraQoyunluUpdateInfo() {
    country_motto = '';
    new_allies = ['Ottomans', 'Mamluks', 'Rassids'];
    new_threats = ['Ottomans', 'Mamluks', 'Timurids',];
    modifier_type = ['Discipline', 'Morale', 'Manpower', 'Recovery', 'Cavalry', 'Goods'];
    modifier_value = ['5%', '10%', '15%', '10%', '15%', '10%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function hungaryUpdateInfo() {
    country_motto = '';
    new_allies = ['Austria', 'Poland', 'Muscovy'];
    new_threats = ['Austria', 'Poland', 'Ottomans',];
    modifier_type = ['Discipline', 'Manpower', 'Cavalry'];
    modifier_value = ['5%', '20%', '20%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function denmarkUpdateInfo() {
    country_motto = '';
    new_allies = ['Austria', 'England', 'Muscovy'];
    new_threats = ['Brandenburg', 'Poland', 'Muscovy',];
    modifier_type = ['Shock Damage', 'Manpower', 'Naval Morale', 'Naval Limit', 'Durability'];
    modifier_value = ['10%', '20%', '10%', '50%', '5%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function switzerlandUpdateInfo() {
    country_motto = '';
    new_allies = ['Austria', 'Florence', 'Brunswick'];
    new_threats = ['Austria', 'France', 'Milan',];
    modifier_type = ['Discipline', 'Infantry', 'Development', 'Advisor Cost'];
    modifier_value = ['5%', '10%', '10%', '-10%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function florenceUpdateInfo() {
    country_motto = '';
    new_allies = ['Austria', 'Switzerland', 'France'];
    new_threats = ['Milan', 'Naples', 'France',];
    modifier_type = ['Discipline', 'Manpower', 'Development'];
    modifier_value = ['5%', '20%', '10%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function papalStatesUpdateInfo() {
    country_motto = '';
    new_allies = ['Austria', 'Castile', 'Switzerland'];
    new_threats = ['France', 'Florence', 'Naples',];
    modifier_type = ['Discipline'];
    modifier_value = ['5%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function naplesUpdateInfo() {
    country_motto = '';
    new_allies = ['Austria', 'Milan', 'Castile'];
    new_threats = ['Papal States', 'Florence', 'Tunis',];
    modifier_type = ['Morale', 'Manpower', 'Goods Produced', 'Development'];
    modifier_value = ['10%', '20%', '10%', '10%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function hamburgUpdateInfo() {
    country_motto = '';
    new_allies = ['Austria', 'England', 'Sweden'];
    new_threats = ['Brandenburg', 'Burgundy', 'Denmark',];
    modifier_type = ['Fire Received', 'Discipline', 'Fire Damage', 'Goods Produced', 'Development'];
    modifier_value = ['-15%', '5%', '5%', '10%', '10%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function landshutUpdateInfo() {
    country_motto = '';
    new_allies = ['Austria', 'Switzerland', 'Brandenburg'];
    new_threats = ['Austria', 'Burgundy', 'France',];
    modifier_type = ['Discipline', 'Tradition', 'Development'];
    modifier_value = ['5%', '0.5', '10%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function hollandUpdateInfo() {
    country_motto = '';
    new_allies = ['Austria', 'France', 'England'];
    new_threats = ['Austria', 'France', 'England',];
    modifier_type = ['Fire Damage', 'Siege', 'Naval Limit', 'Development'];
    modifier_value = ['10%', '10%', '50%', '10%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function veniceUpdateInfo() {
    country_motto = '';
    new_allies = ['France', 'Florence', 'Papal States'];
    new_threats = ['Austria', 'Ottomans', 'Milan',];
    modifier_type = ['Morale', 'Infantry', 'Naval Morale', 'Naval Limit', 'Development'];
    modifier_value = ['10%', '15%', '15%', '25%', '10%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function genoaUpdateInfo() {
    country_motto = '';
    new_allies = ['France', 'Switzerland', 'Austria'];
    new_threats = ['France', 'Milan', 'Florence',];
    modifier_type = ['Discipline', 'Manpower', 'Development'];
    modifier_value = ['5%', '20%', '10%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function norwayUpdateInfo() {
    country_motto = '';
    new_allies = ['Sweden', 'Denmark', 'Austria'];
    new_threats = ['England', 'Denmark', 'Muscovy',];
    modifier_type = ['Discipline', 'Naval Morale', 'Durability'];
    modifier_value = ['2.5%', '20%', '10%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function rothenburgUpdateInfo() {
    country_motto = '';
    new_allies = ['Austria', 'Switzerland', 'Landshut'];
    new_threats = ['Austria', 'Burgundy', 'Landshut',];
    modifier_type = ['Discipline', 'Morale', 'Land Limit', 'Manpower', "Republican"];
    modifier_value = ['5%', '10%', '15%', '10%', "0.3"];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function livonianOrderUpdateInfo() {
    country_motto = '';
    new_allies = ['Muscovy', 'Poland', 'Austria'];
    new_threats = ['Muscovy', 'Poland', 'Sweden',];
    modifier_type = ['Discipline', 'Cavalry', 'Tradition Decay', 'Cavalry'];
    modifier_value = ['5%', '15%', '-1%', '15%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function greatHordeUpdateInfo() {
    country_motto = '';
    new_allies = ['Timurids', 'Qara Qoyunlu', 'Ottomans'];
    new_threats = ['Muscovy', 'Poland', 'Ottomans',];
    modifier_type = ['Manpower', 'Cavalry', 'Recovery', 'Development'];
    modifier_value = ['25%', '20%', '20%', '10%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function georgiaUpdateInfo() {
    country_motto = '';
    new_allies = ['Muscovy', 'Qara Qoyunlu', 'Ottomans'];
    new_threats = ['Great Horde', 'Qara Qoyunlu', 'Ottomans',];
    modifier_type = ['Infantry', 'Recovery', 'Infantry Cost'];
    modifier_value = ['10%', '20%', '20%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function moroccoUpdateInfo() {
    country_motto = '';
    new_allies = ['Tunis', 'Ottomans', 'Mamluks'];
    new_threats = ['Castile', 'Portugal', 'Songhai',];
    modifier_type = ['Discipline', 'Cavalry', 'Naval Limit', 'Galley'];
    modifier_value = ['2.5%', '10%', '25%', '20%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}


function tunisUpdateInfo() {
    country_motto = '';
    new_allies = ['Morocco', 'Ottomans', 'Mamluks'];
    new_threats = ['Naples', 'Castile', 'Mamluks',];
    modifier_type = ['Infantry', 'Naval Limit', 'Galley'];
    modifier_value = ['5%', '25%', '20%'];

    trait_name = [
        '',
        ''];
    trait_rating = [
        'good',
        'good',
        'neutral',
        'neutral',
        'bad'];
    trait_description = [
        '',
        ''
    ];
}