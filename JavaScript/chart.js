// Global Variables
let mode = 0;
let y_label = "Unit Strength";
let title = "Unit Strength per day";
let current_phase = "fire";
let dice_averaged = true;
let crossing = 0;
let terrain = 0;
let battle_length = 1.01;

// Attacker Stats
let attacker = {
    unit_strength: 1000,
    discipline: 1,
    bonus_morale: 0,
    max_morale: 2.5,
    current_morale: 2.5,
    tactics: 1,
    tech: 3,
    fire_damage: 1,
    fire_received: 0,
    shock_damage: 1,
    shock_received: 0,
    infantry_fire_modifier: 1,
    infantry_shock_modifier: 1,
    infantry_combat_ability : 1,
    infantry_offensive_fire_pip: 1,
    infantry_offensive_shock_pip: 1,
    infantry_defensive_fire_pip: 1,
    infantry_defensive_shock_pip: 1,
    artillery_fire_modifier: 1,
    artillery_combat_ability: 1,
    artillery_offensive_fire_pip: 1,
    artillery_defensive_fire_pip: 1,
    artillery_defensive_shock_pip: 1,
    leader_fire_pip: 1,
    leader_shock_pip: 1,
    dice_roll: 5,
    leader_fire_advantage: 0,
    leader_shock_advantage: 0
}

// Defender Stats
let defender = {
    unit_strength: 1000,
    discipline: 1,
    bonus_morale: 0,
    max_morale: 2.5,
    current_morale: 2.5,
    tactics: 1,
    tech: 3,
    fire_damage: 1,
    fire_received: 0,
    shock_damage: 1,
    shock_received: 0,
    infantry_fire_modifier: 1,
    infantry_shock_modifier: 1,
    infantry_combat_ability : 1,
    infantry_offensive_fire_pip: 1,
    infantry_offensive_shock_pip: 1,
    infantry_defensive_fire_pip: 1,
    infantry_defensive_shock_pip: 1,
    artillery_fire_modifier: 1,
    artillery_combat_ability: 1,
    artillery_offensive_fire_pip: 1,
    artillery_defensive_fire_pip: 1,
    artillery_defensive_shock_pip: 1,
    leader_fire_pip: 1,
    leader_shock_pip: 1,
    dice_roll: 5,
    leader_fire_advantage: 0,
    leader_shock_advantage: 0
}

// Data
let data = {
    days: [],
    attacker: {
        damage: [],
        unit_strength: [],
        morale_damage: [],
        morale_strength: []
    },
    defender: {
        damage: [],
        unit_strength: [],
        morale_damage: [],
        morale_strength: []
    }
}

function toggleAlive() {
    document.getElementsByClassName("mode_button_selected")[0].setAttribute("class", "mode_button");
    document.getElementById("show_alive_field").setAttribute("class", "mode_button_selected");
    mode = 0;
    y_label = "Unit Strength";
    title = "Unit Strength per Day";
    loadChart();
}

function toggleDamage() {
    document.getElementsByClassName("mode_button_selected")[0].setAttribute("class", "mode_button");
    document.getElementById("show_damage_field").setAttribute("class", "mode_button_selected");
    mode = 1;
    y_label = "Damage Dealt";
    title = "Damage Dealt per Day";
    loadChart();
}

function toggleTotalMorale() {
    document.getElementsByClassName("mode_button_selected")[0].setAttribute("class", "mode_button");
    document.getElementById("show_morale_field").setAttribute("class", "mode_button_selected");
    mode = 2;
    y_label = "Remaining Morale";
    title = "Remaining Morale per Day";
    loadChart();
}

function toggleMoraleDamage() {
    document.getElementsByClassName("mode_button_selected")[0].setAttribute("class", "mode_button");
    document.getElementById("show_morale_damage_field").setAttribute("class", "mode_button_selected");
    mode = 3;
    y_label = "Morale Damage Dealt";
    title = "Morale Damage Dealt per Day";
    loadChart();
}

function loadChart() {
    document.getElementById("chartContainer").innerHTML = '<canvas id="mainChart" width="100vw" height="30vh"></canvas>';
    var ctx = document.getElementById('mainChart').getContext('2d');

    let attacker_data = data.attacker.unit_strength;
    let defender_data = data.defender.unit_strength;

    if (mode === 0) {
        attacker_data = data.attacker.unit_strength;
        defender_data = data.defender.unit_strength;
    } else if (mode === 1) {
        attacker_data = data.attacker.damage;
        defender_data = data.defender.damage;
    } else if (mode === 2) {
        attacker_data = data.attacker.morale_strength;
        defender_data = data.defender.morale_strength
    } else if (mode === 3) {
        attacker_data = data.attacker.morale_damage;
        defender_data = data.defender.morale_damage;
    }

    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.days,
            datasets: [{
                data: attacker_data,
                label: "Attacker",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: defender_data,
                label: "Defender",
                borderColor: "#8e5ea2",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: title
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: y_label
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Day"
                    }
                }]
            }
        }
    });

}

function newBattle() {
    gatherInputs();
    setDiceAverage();
    setLeaderAdvantage();
    simulateBattle();
    loadChart();
}

// This function collects all data from the HTML table for attackers & defenders.
function gatherInputs() {
    // Gather Terrain Stats
    terrain = parseInt(document.getElementById("terrain").value);
    crossing = parseInt(document.getElementById("crossing").value);

    // Gather Attacker Stats
    attacker.tech = parseInt(document.getElementById("tech_attacker").value);
    attacker.bonus_morale = parseFloat(document.getElementById("morale_attacker").value);
    attacker.max_morale = technologyStats[attacker.tech].morale * (attacker.bonus_morale);
    attacker.current_morale = attacker.max_morale;
    attacker.tactics = technologyStats[attacker.tech].tactic;
    attacker.infantry_fire_modifier = technologyStats[attacker.tech].inf_fire;
    attacker.infantry_shock_modifier = technologyStats[attacker.tech].inf_shock;
    attacker.artillery_fire_modifier = technologyStats[attacker.tech].art_fire;
    attacker.discipline = document.getElementById("discipine_attacker").value;
    attacker.fire_damage = parseFloat(document.getElementById("fire_dealt_attacker").value) + 1;
    attacker.fire_received = parseFloat(document.getElementById("fire_received_attacker").value);
    attacker.shock_damage = parseFloat(document.getElementById("shock_dealt_attacker").value) + 1;
    attacker.shock_received = parseFloat(document.getElementById("shock_received_attacker").value);
    attacker.infantry_combat_ability = parseFloat(document.getElementById("infantry_combat_attacker").value) + 1;
    attacker.artillery_combat_ability = parseFloat(document.getElementById("artillery_combat_attacker").value) + 1;
    attacker.infantry_offensive_fire_pip = parseInt(document.getElementById("pip_inf_fire_off_attacker").value);
    attacker.infantry_defensive_fire_pip = parseInt(document.getElementById("pip_inf_fire_def_attacker").value);
    attacker.infantry_offensive_shock_pip = parseInt(document.getElementById("pip_inf_shock_off_attacker").value);
    attacker.infantry_defensive_shock_pip = parseInt(document.getElementById("pip_inf_shock_def_attacker").value);
    attacker.artillery_offensive_fire_pip = parseInt(document.getElementById("pip_art_fire_off_attacker").value);
    attacker.artillery_defensive_fire_pip = parseInt(document.getElementById("pip_art_fire_def_attacker").value);
    attacker.artillery_defensive_shock_pip = parseInt(document.getElementById("pip_art_shock_def_attacker").value);
    attacker.leader_fire_pip = parseInt(document.getElementById("leader_fire_attacker").value);
    attacker.leader_shock_pip = parseInt(document.getElementById("leader_shock_attacker").value);

    // Gather Defener Stats
    defender.tech = document.getElementById("tech_defender").value;
    defender.bonus_morale = parseFloat(document.getElementById("morale_defender").value);
    defender.max_morale = technologyStats[defender.tech].morale * (defender.bonus_morale);
    defender.current_morale = defender.max_morale;
    defender.tactics = technologyStats[defender.tech].tactic;
    defender.infantry_fire_modifier = technologyStats[defender.tech].inf_fire;
    defender.infantry_shock_modifier = technologyStats[defender.tech].inf_shock;
    defender.artillery_fire_modifier = technologyStats[defender.tech].art_fire;
    defender.discipline = document.getElementById("discipine_defender").value;
    defender.fire_damage = parseFloat(document.getElementById("fire_dealt_defender").value) + 1;
    defender.fire_received = parseFloat(document.getElementById("fire_received_defender").value);
    defender.shock_damage = parseFloat(document.getElementById("shock_dealt_defender").value) + 1;
    defender.shock_received = parseFloat(document.getElementById("shock_received_defender").value);
    defender.infantry_combat_ability = parseFloat(document.getElementById("infantry_combat_defender").value) + 1;
    defender.artillery_combat_ability = parseFloat(document.getElementById("artillery_combat_defender").value) + 1;
    defender.infantry_offensive_fire_pip = parseInt(document.getElementById("pip_inf_fire_off_defender").value);
    defender.infantry_defensive_fire_pip = parseInt(document.getElementById("pip_inf_fire_def_defender").value);
    defender.infantry_offensive_shock_pip = parseInt(document.getElementById("pip_inf_shock_off_defender").value);
    defender.infantry_defensive_shock_pip = parseInt(document.getElementById("pip_inf_shock_def_defender").value);
    defender.artillery_offensive_fire_pip = parseInt(document.getElementById("pip_art_fire_off_defender").value);
    defender.artillery_defensive_fire_pip = parseInt(document.getElementById("pip_art_fire_def_defender").value);
    defender.artillery_defensive_shock_pip = parseInt(document.getElementById("pip_art_shock_def_defender").value);
    defender.leader_fire_pip = parseInt(document.getElementById("leader_fire_defender").value);
    defender.leader_shock_pip = parseInt(document.getElementById("leader_shock_defender").value);
}

// This function sets the variable "dice_averaged" based on the HTML check box. If checked, average = true
function setDiceAverage() {
    if (document.getElementById("average_dice").checked === true) {
        dice_averaged = true;
    } else {
        dice_averaged = false;
    }
}

// This function determines which army has the better leader, and by how much.
function setLeaderAdvantage() {
    // Reset all advantage
    attacker.leader_fire_advantage = 0;
    attacker.leader_shock_advantage = 0;
    defender.leader_fire_advantage = 0;
    defender.leader_shock_advantage = 0;
    // Sets fire advantage
    if (attacker.leader_fire_pip > defender.leader_fire_pip) {
        attacker.leader_fire_advantage = attacker.leader_fire_pip - defender.leader_fire_pip;
    } else {
        defender.leader_fire_advantage = defender.leader_fire_pip - attacker.leader_fire_pip;
    }

    // Sets shock advantage
    if (attacker.leader_shock_pip > defender.leader_shock_pip) {
        attacker.leader_shock_advantage = attacker.leader_shock_pip - defender.leader_shock_pip;
    } else {
        defender.leader_shock_advantage = defender.leader_shock_pip - attacker.leader_shock_pip;
    }
}

function simulateBattle() {
    current_phase = "fire";
    attacker.unit_strength = 1000;
    defender.unit_strength = 1000;

    data.days = [];
    data.attacker.damage = [];
    data.defender.damage = [];
    data.attacker.unit_strength = [];
    data.defender.unit_strength = [];
    data.attacker.morale_damage = [];
    data.defender.morale_damage = [];
    data.attacker.morale_strength = [];
    data.defender.morale_strength = [];

    let counter = 0;
    let battle_length = 1.01;
    let days = 1;

    attacker.dice_roll = getDice();
    defender.dice_roll = getDice();

    while (attacker.unit_strength > 0 && defender.unit_strength > 0 && attacker.current_morale > 0.05 && defender.current_morale > 0.05) {
        if (counter === 3) {
            attacker.dice_roll = getDice();
            defender.dice_roll = getDice();
            addDiceModifiers();
            if (current_phase === "fire") {
                current_phase = "shock";
            } else {
                current_phase = "fire";
            }
            counter = 1;
        } else {
            counter++; 
            }
        battle_length += 0.01;

        let attacker_inf_damage = getInfantryDamageAttacker(attacker.dice_roll);
        let defender_inf_damage = getInfantryDamageDefender(defender.dice_roll);
        let attacker_art_damage = getArtilleryDamageAttacker(attacker.dice_roll);
        let defender_art_damage = getArtilleryDamageDefender(defender.dice_roll);

        let attacker_total_damage = Math.floor(attacker_inf_damage + attacker_art_damage);
        let defender_total_damage = Math.floor(defender_inf_damage + defender_art_damage);

        let attacker_infantry_morale_damage = getMoraleDamage(attacker_inf_damage, attacker.max_morale);
        let defender_infantry_morale_damage = getMoraleDamage(defender_inf_damage, defender.max_morale);
        let attacker_artillery_morale_damage = getMoraleDamage(attacker_art_damage, attacker.max_morale);
        let defender_artillery_morale_damage = getMoraleDamage(defender_art_damage, defender.max_morale);

        let attacker_total_morale_damage = parseFloat(attacker_infantry_morale_damage + attacker_artillery_morale_damage);
        let defender_total_morale_damage = parseFloat(defender_infantry_morale_damage + defender_artillery_morale_damage);

        attacker.current_morale -= defender_total_morale_damage.toFixed(2);
        defender.current_morale -= attacker_total_morale_damage.toFixed(2);

        attacker.unit_strength -= defender_total_damage;
        defender.unit_strength -= attacker_total_damage;

        attacker.current_morale = parseInt(attacker.current_morale * 100) / 100;
        defender.current_morale = parseInt(defender.current_morale * 100) / 100;

        if (attacker.unit_strength < 0) {attacker.unit_strength = 0};
        if (defender.unit_strength < 0) {defender.unit_strength = 0};
        if (attacker.current_morale < 0) {attacker.current_morale = 0};
        if (defender.current_morale < 0) {defender.current_morale = 0};

        data.attacker.morale_damage.push(attacker_total_morale_damage);
        data.defender.morale_damage.push(defender_total_morale_damage);

        data.attacker.morale_strength.push(attacker.current_morale);
        data.defender.morale_strength.push(defender.current_morale);

        data.attacker.damage.push(attacker_total_damage);
        data.defender.damage.push(defender_total_damage);

        data.attacker.unit_strength.push(attacker.unit_strength);
        data.defender.unit_strength.push(defender.unit_strength);

        battle_length += 0.01;
        data.days.push(days);
        days++;
    }
    
}

// This function gives a random 1 - 9 dice if unaveraged, and a dice of 5 if averaged
function getDice() {
    if (dice_averaged) {
        return 5;
    } else {
        return Math.floor(Math.random() * 10);
    }
}

// This function adds other modifiers that affect the dice roll such as leader advantage and terrain panelties
function addDiceModifiers() {
    let current_attacker_leader_modifier = 0;
    let current_defender_leader_modifier = 0;
    if (current_phase === "fire") {
        current_attacker_leader_modifier = attacker.leader_fire_advantage;
        current_defender_leader_modifier = defender.leader_fire_advantage;
    } else {
        current_attacker_leader_modifier = attacker.leader_shock_advantage;
        current_defender_leader_modifier = defender.leader_shock_advantage;
    }
    attacker.dice_roll += current_attacker_leader_modifier - terrain - crossing;
    defender.dice_roll += current_defender_leader_modifier;

}

// This function calculates the attacker's infantry damage
function getInfantryDamageAttacker(roll) {
    let total_roll;
    let current_modifier;
    let phase_modifier;
    let defender_modifier;
    let base;
    if (current_phase === "fire") {
        total_roll = roll + attacker.infantry_offensive_fire_pip - defender.infantry_defensive_fire_pip - Math.floor(defender.artillery_defensive_fire_pip / 2);
        current_modifier = attacker.infantry_fire_modifier;
        phase_modifier = attacker.fire_damage;
        defender_modifier = defender.fire_received;  
    } else {
        total_roll = roll + attacker.infantry_offensive_shock_pip - defender.infantry_defensive_shock_pip - Math.floor(defender.artillery_defensive_shock_pip / 2);
        current_modifier = attacker.infantry_shock_modifier;
        phase_modifier = attacker.shock_damage;
        defender_modifier = defender.shock_received;
    }
    base = total_roll * 5 + 15;
    return getDamage(base, attacker.unit_strength, current_modifier, phase_modifier, attacker.infantry_combat_ability, attacker.discipline, defender.discipline, defender.tactics, defender_modifier);
}

// This function calculates the defender's infantry damage
function getInfantryDamageDefender(roll) {
    let total_roll;
    let current_modifier;
    let phase_modifier;
    let defender_modifier;
    let base;
    if (current_phase === "fire") {
        total_roll = roll + defender.infantry_offensive_fire_pip - attacker.infantry_defensive_fire_pip - Math.floor(attacker.artillery_defensive_fire_pip / 2);
        current_modifier = defender.infantry_fire_modifier;
        phase_modifier = defender.fire_damage;
        defender_modifier = attacker.fire_received;
    } else {
        total_roll = roll + defender.infantry_offensive_shock_pip - attacker.infantry_defensive_shock_pip - Math.floor(attacker.artillery_defensive_shock_pip / 2);
        current_modifier = defender.infantry_shock_modifier;
        phase_modifier = defender.shock_damage;
        defender_modifier = attacker.shock_received;
    }
    base = total_roll * 5 + 15;
    return getDamage(base, defender.unit_strength, current_modifier, phase_modifier, defender.infantry_combat_ability, defender.discipline, attacker.discipline, attacker.tactics, defender_modifier);
}

// This function calculates the attacker's artillery damage
function getArtilleryDamageAttacker(roll) {
    if (current_phase === "fire" && attacker.tech >= 7) {
        let total_roll = roll + attacker.artillery_offensive_fire_pip - defender.infantry_defensive_fire_pip;
        let current_modifier = attacker.artillery_fire_modifier;
        let phase_modifier = attacker.fire_damage;
        let defender_modifier = defender.fire_received;
        let base = total_roll * 5 + 15;
        return getDamage(base, 1000, current_modifier, phase_modifier, attacker.artillery_combat_ability, attacker.discipline, defender.discipline, defender.tactics, defender_modifier) / 2;
    } else {
        return 0;
    }
}

// This function calculates the defener's artillery damage
function getArtilleryDamageDefender(roll) {
    if (current_phase === "fire" && defender.tech >= 7) {
        let total_roll = roll + defender.artillery_offensive_fire_pip - attacker.infantry_defensive_fire_pip;
        let current_modifier = defender.artillery_fire_modifier;
        let phase_modifier = defender.fire_damage;
        let defender_modifier = attacker.fire_received;
        let base = total_roll * 5 + 15;
        return getDamage(base, 1000, current_modifier, phase_modifier, defender.artillery_combat_ability, defender.discipline, attacker.discipline, attacker.tactics, defender_modifier) / 2;
    } else {
        return 0;
    }
}

// This function holds the damage formula
function getDamage(base, unitStrength, unitModifier, phaseModifier, combatAbility, discipline, e_discipline, e_tactic, e_damage_reduction) {
    let damage = base * (unitStrength / 1000) * unitModifier * phaseModifier * combatAbility * discipline / (e_tactic * e_discipline) * (1 - e_damage_reduction) * battle_length;
    return damage;
}

// This function holds the morale damage formula
function getMoraleDamage(damage, max_morale) {
    return damage / 200 * (max_morale / 2.7) + 0.03;
}

// This holds the static technology variables
const technologyStats = [
    //Tech 0
    {
        inf_fire: .25,
        inf_shock: .3,
        art_fire: 0,
        morale: 2,
        tactic: .5
    },
    //Tech 1
    {
        inf_fire: .35,
        inf_shock: .3,
        art_fire: 0,
        morale: 2,
        tactic: .5
    },
    //Tech 2
    {
        inf_fire: .35,
        inf_shock: .5,
        art_fire: 0,
        morale: 2,
        tactic: .5
    },
    //Tech 3
    {
        inf_fire: .35,
        inf_shock: .5,
        art_fire: 0,
        morale: 2.5,
        tactic: .5
    },
    //Tech 4
    {
        inf_fire: .35,
        inf_shock: .5,
        art_fire: 0,
        morale: 3,
        tactic: .75
    },
    //Tech 5
    {
        inf_fire: .35,
        inf_shock: .65,
        art_fire: 0,
        morale: 3,
        tactic: .75
    },
    //Tech 6
    {
        inf_fire: .55,
        inf_shock: .95,
        art_fire: 0,
        morale: 3,
        tactic: 1
    },
    //Tech 7
    {
        inf_fire: .55,
        inf_shock: .95,
        art_fire: 1,
        morale: 3,
        tactic: 1.25
    },
    //Tech 8
    {
        inf_fire: .8,
        inf_shock: .95,
        art_fire: 1,
        morale: 3,
        tactic: 1.25
    },
    //Tech 9
    {
        inf_fire: .8,
        inf_shock: .95,
        art_fire: 1,
        morale: 3,
        tactic: 1.5
    },
    //Tech 10
    {
        inf_fire: .8,
        inf_shock: .95,
        art_fire: 1,
        morale: 3,
        tactic: 1.5
    },
    //Tech 11
    {
        inf_fire: .8,
        inf_shock: 1.15,
        art_fire: 1,
        morale: 3,
        tactic: 1.5
    },
    //Tech 12
    {
        inf_fire: .8,
        inf_shock: 1.15,
        art_fire: 1,
        morale: 3,
        tactic: 1.75
    },
    //Tech 13
    {
        inf_fire: .8,
        inf_shock: 1.15,
        art_fire: 1.4,
        morale: 3,
        tactic: 1.75
    },
    //Tech 14
    {
        inf_fire: 1.1,
        inf_shock: 1.15,
        art_fire: 1.4,
        morale: 3,
        tactic: 1.75
    },
    //Tech 15
    {
        inf_fire: 1.1,
        inf_shock: 1.15,
        art_fire: 1.4,
        morale: 4,
        tactic: 2
    },
    //Tech 16
    {
        inf_fire: 1.1,
        inf_shock: 1.15,
        art_fire: 2.4,
        morale: 4,
        tactic: 2
    },
    //Tech 17
    {
        inf_fire: 1.1,
        inf_shock: 1.15,
        art_fire: 2.4,
        morale: 4,
        tactic: 2
    },
    //Tech 18
    {
        inf_fire: 1.1,
        inf_shock: 1.15,
        art_fire: 2.4,
        morale: 4,
        tactic: 2
    },
    //Tech 19
    {
        inf_fire: 1.1,
        inf_shock: 1.15,
        art_fire: 2.4,
        morale: 4,
        tactic: 2.25
    },
    //Tech 20
    {
        inf_fire: 1.6,
        inf_shock: 1.15,
        art_fire: 2.4,
        morale: 4,
        tactic: 2.25
    },
    //Tech 21
    {
        inf_fire: 1.6,
        inf_shock: 1.65,
        art_fire: 2.4,
        morale: 4,
        tactic: 2.5
    },
    //Tech 22
    {
        inf_fire: 1.6,
        inf_shock: 1.65,
        art_fire: 4.4,
        morale: 4,
        tactic: 2.5
    },
    //Tech 23
    {
        inf_fire: 1.6,
        inf_shock: 1.65,
        art_fire: 4.4,
        morale: 4,
        tactic: 2.75
    },
    //Tech 24
    {
        inf_fire: 1.6,
        inf_shock: 1.65,
        art_fire: 4.4,
        morale: 4,
        tactic: 3
    },
    //Tech 25
    {
        inf_fire: 1.6,
        inf_shock: 1.65,
        art_fire: 6.4,
        morale: 4,
        tactic: 3
    },
    //Tech 26
    {
        inf_fire: 1.6,
        inf_shock: 1.65,
        art_fire: 6.4,
        morale: 5,
        tactic: 3
    },
    //Tech 27
    {
        inf_fire: 2.1,
        inf_shock: 1.65,
        art_fire: 6.4,
        morale: 5,
        tactic: 3
    },
    //Tech 28
    {
        inf_fire: 2.1,
        inf_shock: 2.15,
        art_fire: 6.4,
        morale: 5,
        tactic: 3
    },
    //Tech 29
    {
        inf_fire: 2.1,
        inf_shock: 2.15,
        art_fire: 6.4,
        morale: 5,
        tactic: 3
    },
    //Tech 30
    {
        inf_fire: 2.1,
        inf_shock: 2.15,
        art_fire: 6.4,
        morale: 6,
        tactic: 3.25
    },
    //Tech 31
    {
        inf_fire: 3.1,
        inf_shock: 2.15,
        art_fire: 6.4,
        morale: 6,
        tactic: 3.25
    },
    //Tech 32
    {
        inf_fire: 3.1,
        inf_shock: 2.15,
        art_fire: 8.4,
        morale: 6,
        tactic: 3.5
    },
]
