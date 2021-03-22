// Global Variables
let mode = 0;
let y_label = "Unit Strength";
let title = "Remaining troops";
let current_phase = "fire";
let dice_averaged = true;
let crossing = 0;
let terrain = 0;
let battle_length = 1.01;
let attacker_dice;
let defender_dice;

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
}

let leader_fire_advantage_attacker = 0;
let leader_fire_advantage_defender = 0;
let leader_shock_advantage_attacker = 0;
let leader_shock_advantage_defender = 0;

let data_damage_attacker;
let data_damage_defender;

let data_remaining_attacker;
let data_remaining_defender;

let data_morale_damage_attacker;
let data_morale_damage_defender;

let data_remaining_morale_attacker;
let data_remaining_morale_defender;

let data_days;

function toggleAlive() {
    document.getElementsByClassName("mode_button_selected")[0].setAttribute("class", "mode_button");
    document.getElementById("show_alive_field").setAttribute("class", "mode_button_selected");
    mode = 0;
    y_label = "Unit Strength";
    title = "Remaining Troops";
    document.getElementById("chartContainer").innerHTML = '<canvas id="mainChart" width="100vw" height="30vh"></canvas>';
    loadChart();
}

function toggleDamage() {
    document.getElementsByClassName("mode_button_selected")[0].setAttribute("class", "mode_button");
    document.getElementById("show_damage_field").setAttribute("class", "mode_button_selected");
    mode = 1;
    y_label = "Damage Dealt";
    title = "Damage Dealt";
    document.getElementById("chartContainer").innerHTML = '<canvas id="mainChart" width="100vw" height="30vh"></canvas>';
    loadChart();
}

function toggleTotalMorale() {
    document.getElementsByClassName("mode_button_selected")[0].setAttribute("class", "mode_button");
    document.getElementById("show_morale_field").setAttribute("class", "mode_button_selected");
    mode = 2;
    y_label = "Remaining Morale";
    title = "Remaining Morale per Day";
    document.getElementById("chartContainer").innerHTML = '<canvas id="mainChart" width="100vw" height="30vh"></canvas>';
    loadChart();
}

function toggleMoraleDamage() {
    document.getElementsByClassName("mode_button_selected")[0].setAttribute("class", "mode_button");
    document.getElementById("show_morale_damage_field").setAttribute("class", "mode_button_selected");
    mode = 3;
    y_label = "Morale Damage Dealt";
    title = "Morale Damage Dealt per Day";
    document.getElementById("chartContainer").innerHTML = '<canvas id="mainChart" width="100vw" height="30vh"></canvas>';
    loadChart();
}

function loadChart() {
    var ctx = document.getElementById('mainChart').getContext('2d');

    let attacker_data = data_remaining_attacker;
    let defender_data = data_remaining_defender;

    if (mode === 0) {
        attacker_data = data_remaining_attacker;
        defender_data = data_remaining_defender;
    } else if (mode === 1) {
        attacker_data = data_damage_attacker;
        defender_data = data_damage_defender;
    } else if (mode === 2) {
        attacker_data = data_remaining_morale_attacker;
        defender_data = data_remaining_morale_defender
    } else if (mode === 3) {
        attacker_data = data_morale_damage_attacker;
        defender_data = data_morale_damage_defender;
    }

    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data_days,
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
}


function gatherInputs() {
    terrain = parseInt(document.getElementById("terrain").value);
    crossing = parseInt(document.getElementById("crossing").value);

    if (document.getElementById("average_dice").checked === true) {
        dice_averaged = true;
    } else {
        dice_averaged = false;
    }

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

    console.log(attacker.bonus_morale);


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

    setLeaderAdvantage();
    simulateBattle();
    document.getElementById("chartContainer").innerHTML = '<canvas id="mainChart" width="100vw" height="30vh"></canvas>';
    loadChart();
}

function simulateBattle() {
    current_phase = "fire";
    data_damage_attacker = [];
    data_damage_defender = [];

    data_remaining_attacker = [];
    data_remaining_defender = [];

    data_morale_damage_attacker = [];
    data_morale_damage_defender = [];

    data_remaining_morale_attacker = [];
    data_remaining_morale_defender = [];

    data_days = [];

    attacker.unit_strength = 1000;
    defender.unit_strength = 1000;

    let counter = 0;
    let battle_length = 1.01;
    let days = 1;

    attacker.dice_roll = getDice();
    defender.dice_roll = getDice();

    while (attacker.unit_strength > 150 && defender.unit_strength > 150 && attacker.current_morale > 0.05 && defender.current_morale > 0.05) {
        if (counter === 3) {
            attacker.dice_roll = getDice();
            defender.dice_roll = getDice();
            if (current_phase === "fire") {
                current_phase = "shock";
            } else {
                current_phase = "fire";
            }
            counter = 1;
        } else {
            counter++; 
            }
        calculateDamage();
        battle_length += 0.01;

        let attacker_inf_damage = getInfantryDamageAttacker(attacker.dice_roll);
        let defender_inf_damage = getInfantryDamageDefender(defender.dice_roll);
        let attacker_art_damage = getArtilleryDamageAttacker(attacker.dice_roll);
        let defender_art_damage = getArtilleryDamageDefender(defender.dice_roll);

        console.log(attacker_inf_damage);
        console.log(defender_inf_damage);

        let attacker_total_damage = Math.floor(attacker_inf_damage + attacker_art_damage);
        let defender_total_damage = Math.floor(defender_inf_damage + defender_art_damage);

        let attacker_infantry_morale_damage = getMoraleDamage(attacker_inf_damage, attacker.max_morale);
        let defender_infantry_morale_damage = getMoraleDamage(defender_inf_damage, defender.max_morale);
        let attacker_artillery_morale_damage = getMoraleDamage(attacker_art_damage, attacker.max_morale);
        let defender_artillery_morale_damage = getMoraleDamage(defender_art_damage, defender.max_morale);

        let attacker_total_morale_damage = parseFloat(attacker_infantry_morale_damage + attacker_artillery_morale_damage).toFixed(2);
        let defender_total_morale_damage = parseFloat(defender_infantry_morale_damage + defender_artillery_morale_damage).toFixed(2);

        data_morale_damage_attacker.push(attacker_total_morale_damage);
        data_morale_damage_defender.push(defender_total_morale_damage);

        attacker.current_morale -= defender_total_morale_damage;
        defender.current_morale -= attacker_total_morale_damage;

        data_remaining_morale_attacker.push(attacker.current_morale);
        data_remaining_morale_defender.push(defender.current_morale);

        data_damage_attacker.push(attacker_total_damage);
        data_damage_defender.push(defender_total_damage);

        attacker.unit_strength -= defender_total_damage;
        defender.unit_strength -= attacker_total_damage;

        data_remaining_attacker.push(attacker.unit_strength);
        data_remaining_defender.push(defender.unit_strength);

        console.log(attacker.unit_strength);
        console.log(defender.unit_strength);

        battle_length += 0.01;
        data_days.push(days);
        days++;
    }
}

function setLeaderAdvantage() {
    if (attacker.leader_fire_pip > defender.leader_fire_pip) {
        leader_fire_advantage_attacker = attacker.leader_fire_pip - defender.leader_fire_pip;
    } else {
        leader_fire_advantage_defender = defender.leader_fire_pip - attacker.leader_fire_pip;
    }

    if (attacker.leader_shock_pip > defender.leader_shock_pip) {
        leader_shock_advantage_attacker = attacker.leader_shock_pip - defender.leader_shock_pip;
    } else {
        leader_shock_advantage_defender = defender.leader_shock_pip - attacker.leader_shock_pip;
    }
}

function calculateDamage() {
    let current_attacker_leader_modifier = 0;
    let current_defender_leader_modifier = 0;
    if (current_phase === "fire") {
        current_attacker_leader_modifier = leader_fire_advantage_attacker;
        current_defender_leader_modifier = leader_fire_advantage_defender;
    } else {
        current_attacker_leader_modifier = leader_shock_advantage_attacker;
        current_defender_leader_modifier = leader_shock_advantage_defender;
    }
    attacker.dice_roll += current_attacker_leader_modifier - terrain - crossing;
    defender.dice_roll += current_defender_leader_modifier;

}

function getDice() {
    if (dice_averaged) {
        return 5;
    } else {
        return Math.floor(Math.random() * 10);
    }
}

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

function getDamage(base, unitStrength, unitModifier, phaseModifier, combatAbility, discipline, e_discipline, e_tactic, e_damage_reduction) {
    let damage = base * (unitStrength / 1000) * unitModifier * phaseModifier * combatAbility * discipline / (e_tactic * e_discipline) * (1 - e_damage_reduction) * battle_length;
    return damage;
}

function getMoraleDamage(damage, max_morale) {
    return damage / 200 * (max_morale / 2.7) + 0.03;
}

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
