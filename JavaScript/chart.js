let mode = 0;
let y_label = "Unit Strength";
let title = "Remaining troops";


let current_phase = "fire";
let dice_averaged = true;
let crossing = 0;
let terrain = 0;
let battle_length = 1.01;

let unit_strength_attacker = 1000;
let discipline_attacker = 1;
let morale_attacker = 1;
let tactics_attacker = 1;
let tech_attacker = 3;

let fire_dealt_attacker = 1;
let fire_received_attacker = 0;
let shock_dealt_attacker = 1;
let shock_received_attacker = 0;

let infantry_fire_modifier_attacker = 1;
let infantry_shock_modifier_attacker = 1;

let infantry_combat_attacker = 1;
let infantry_fire_attack_pip_attacker = 1;
let infantry_shock_attack_pip_attacker = 1;
let infantry_fire_defence_pip_attacker = 1;
let infantry_shock_defence_pip_attacker = 1;

let artillery_fire_modifier_attacker = 1;
let artillery_combat_attacker = 1;
let artillery_fire_attack_pip_attacker = 1;
let artillery_fire_defence_pip_attacker = 1;
let artillery_shock_defence_pip_attacker = 1;

let leader_fire_attacker = 0;
let leader_shock_attacker = 0;



let unit_strength_defender = 1000;
let discipline_defender = 1;
let morale_defender = 1;
let tactics_defender = 1;
let tech_defender = 3;

let fire_dealt_defender = 1;
let fire_received_defender = 0;
let shock_dealt_defender = 1;
let shock_received_defender = 0;

let infantry_fire_modifier_defender = 1;
let infantry_shock_modifier_defender = 1;

let infantry_combat_defender = 1;
let infantry_fire_attack_pip_defender = 1;
let infantry_shock_attack_pip_defender = 1;
let infantry_fire_defence_pip_defender = 1;
let infantry_shock_defence_pip_defender = 1;

let artillery_fire_modifier_defender = 1;
let artillery_combat_defender = 1;
let artillery_fire_attack_pip_defender = 1;
let artillery_fire_defence_pip_defender = 1;
let artillery_shock_defence_pip_defender = 1;

let leader_fire_defender = 0;
let leader_shock_defender = 0;


let dice_roll_attacker = 5;
let dice_roll_defender = 5;

let leader_fire_advantage_attacker = 0;
let leader_fire_advantage_defender = 0;
let leader_shock_advantage_attacker = 0;
let leader_shock_advantage_defender = 0;


let data_damage_attacker;
let data_damage_defender;

let data_remaining_attacker;
let data_remaining_defender;

let data_days;

function toggleAlive() {
    mode = 0;
    y_label = "Unit Strength";
    title = "Remaining Troops";
    document.getElementById("chartContainer").innerHTML = '<canvas id="mainChart" width="100vw" height="30vh"></canvas>';
    loadChart();
}

function toggleDamage() {
    mode = 1;
    y_label = "Damage Dealt";
    title = "Damage Dealt";
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
    } else {
        attacker_data = data_damage_attacker;
        defender_data = data_damage_defender;
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


    tech_attacker = parseInt(document.getElementById("tech_attacker").value);
    morale_attacker = technologyStats[tech_attacker].morale * parseFloat(document.getElementById("morale_attacker"));
    tactics_attacker = technologyStats[tech_attacker].tactic;
    infantry_fire_modifier_attacker = technologyStats[tech_attacker].inf_fire;
    infantry_shock_modifier_attacker = technologyStats[tech_attacker].inf_shock;
    artillery_fire_modifier_attacker = technologyStats[tech_attacker].art_fire;
    discipline_attacker = document.getElementById("discipine_attacker").value;
    fire_dealt_attacker = parseFloat(document.getElementById("fire_dealt_attacker").value) + 1;
    fire_received_attacker = parseFloat(document.getElementById("fire_received_attacker").value);
    shock_dealt_attacker = parseFloat(document.getElementById("shock_dealt_attacker").value) + 1;
    shock_received_attacker = parseFloat(document.getElementById("shock_received_attacker").value);
    infantry_combat_attacker = parseFloat(document.getElementById("infantry_combat_attacker").value) + 1;
    artillery_combat_attacker = parseFloat(document.getElementById("artillery_combat_attacker").value) + 1;
    infantry_fire_attack_pip_attacker = parseInt(document.getElementById("pip_inf_fire_off_attacker").value);
    infantry_fire_defence_pip_attacker = parseInt(document.getElementById("pip_inf_fire_def_attacker").value);
    infantry_shock_attack_pip_attacker = parseInt(document.getElementById("pip_inf_shock_off_attacker").value);
    infantry_shock_defence_pip_attacker = parseInt(document.getElementById("pip_inf_shock_def_attacker").value);
    artillery_fire_attack_pip_attacker = parseInt(document.getElementById("pip_art_fire_off_attacker").value);
    artillery_fire_defence_pip_attacker = parseInt(document.getElementById("pip_art_fire_def_attacker").value);
    artillery_shock_defence_pip_attacker = parseInt(document.getElementById("pip_art_shock_def_attacker").value);
    leader_fire_attacker = parseInt(document.getElementById("leader_fire_attacker").value);
    leader_shock_attacker = parseInt(document.getElementById("leader_shock_attacker").value);


    tech_defender = document.getElementById("tech_defender").value;
    morale_defender = technologyStats[tech_defender].morale * parseFloat(document.getElementById("morale_defender"));
    tactics_defender = technologyStats[tech_defender].tactic;
    infantry_fire_modifier_defender = technologyStats[tech_defender].inf_fire;
    infantry_shock_modifier_defender = technologyStats[tech_defender].inf_shock;
    artillery_fire_modifier_defender = technologyStats[tech_defender].art_fire;
    discipline_defender = document.getElementById("discipine_defender").value;
    fire_dealt_defender = parseFloat(document.getElementById("fire_dealt_defender").value) + 1;
    fire_received_defender = parseFloat(document.getElementById("fire_received_defender").value);
    shock_dealt_defender = parseFloat(document.getElementById("shock_dealt_defender").value) + 1;
    shock_received_defender = parseFloat(document.getElementById("shock_received_defender").value);
    infantry_combat_defender = parseFloat(document.getElementById("infantry_combat_defender").value) + 1;
    artillery_combat_defender = parseFloat(document.getElementById("artillery_combat_defender").value) + 1;
    infantry_fire_attack_pip_defender = parseInt(document.getElementById("pip_inf_fire_off_defender").value);
    infantry_fire_defence_pip_defender = parseInt(document.getElementById("pip_inf_fire_def_defender").value);
    infantry_shock_attack_pip_defender = parseInt(document.getElementById("pip_inf_shock_off_defender").value);
    infantry_shock_defence_pip_defender = parseInt(document.getElementById("pip_inf_shock_def_defender").value);
    artillery_fire_attack_pip_defender = parseInt(document.getElementById("pip_art_fire_off_defender").value);
    artillery_fire_defence_pip_defender = parseInt(document.getElementById("pip_art_fire_def_defender").value);
    artillery_shock_defence_pip_defender = parseInt(document.getElementById("pip_art_shock_def_defender").value);
    leader_fire_defender = parseInt(document.getElementById("leader_fire_defender").value);
    leader_shock_defender = parseInt(document.getElementById("leader_shock_defender").value);

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

    data_days = [];

    unit_strength_attacker = 1000;
    unit_strength_defender = 1000;

    let counter = 0;
    let battle_length = 1.01;
    let days = 1;

    attacker_dice = getDice();
    defender_dice = getDice();

    while (unit_strength_attacker > 150 && unit_strength_defender > 150) {
        if (counter === 3) {
            attacker_dice = getDice();
            defender_dice = getDice();
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

        let attacker_inf_damage = getInfantryDamageAttacker(attacker_dice);
        let defender_inf_damage = getInfantryDamageDefender(defender_dice);
        let attacker_art_damage = getArtilleryDamageAttacker(attacker_dice);
        let defender_art_damage = getArtilleryDamageDefender(defender_dice);

        console.log(attacker_art_damage);

        let attacker_total_damage = Math.floor(attacker_inf_damage + attacker_art_damage);
        let defender_total_damage = Math.floor(defender_inf_damage + defender_art_damage);

        data_damage_attacker.push(attacker_total_damage);
        data_damage_defender.push(defender_total_damage);

        data_remaining_attacker.push(unit_strength_attacker - defender_total_damage);
        data_remaining_defender.push(unit_strength_defender - attacker_total_damage);


        unit_strength_attacker -= defender_total_damage;
        unit_strength_defender -= attacker_total_damage;
        battle_length += 0.01;
        data_days.push(days);
        days++;
    }
}

function setLeaderAdvantage() {
    if (leader_fire_attacker > leader_fire_defender) {
        leader_fire_advantage_attacker = leader_fire_attacker - leader_fire_defender;
    } else {
        leader_fire_advantage_defender = leader_fire_defender - leader_fire_attacker;
    }

    if (leader_shock_attacker > leader_shock_defender) {
        leader_shock_advantage_attacker = leader_shock_attacker - leader_shock_defender;
    } else {
        leader_shock_advantage_defender = leader_shock_defender - leader_shock_attacker;
    }
}

let attacker_dice;
let defender_dice;

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
    attacker_dice += current_attacker_leader_modifier - terrain - crossing;
    defender_dice += current_defender_leader_modifier;

}

function getDice() {
    if (dice_averaged) {
        return 5;
    } else {
        return Math.floor(Math.random() * 10);
    }
}

function getInfantryDamageAttacker(roll) {
    if (current_phase === "fire") {
        let total_roll = roll + infantry_fire_attack_pip_attacker - infantry_fire_defence_pip_defender - Math.floor(artillery_fire_defence_pip_defender / 2);
        let current_modifier = infantry_fire_modifier_attacker;
        let phase_modifier = fire_dealt_attacker;
        let defender_modifier = fire_received_defender;
        let base = total_roll * 5 + 15;
        return getDamage(base, unit_strength_attacker, current_modifier, phase_modifier, infantry_combat_attacker, discipline_attacker, discipline_defender, tactics_defender, defender_modifier);
    } else {
        let total_roll = roll + infantry_shock_attack_pip_attacker - infantry_shock_defence_pip_defender - Math.floor(artillery_shock_defence_pip_defender / 2);
        let current_modifier = infantry_shock_modifier_attacker;
        let phase_modifier = shock_dealt_attacker;
        let defender_modifier = shock_received_defender;
        let base = total_roll * 5 + 15;
        return getDamage(base, unit_strength_attacker, current_modifier, phase_modifier, infantry_combat_attacker, discipline_attacker, discipline_defender, tactics_defender, defender_modifier);
    }
}

function getInfantryDamageDefender(roll) {
    if (current_phase === "fire") {
        let total_roll = roll + infantry_fire_attack_pip_defender - infantry_fire_defence_pip_attacker - Math.floor(artillery_fire_defence_pip_attacker / 2);
        let current_modifier = infantry_fire_modifier_defender;
        let phase_modifier = fire_dealt_defender;
        let defender_modifier = fire_received_attacker;
        let base = total_roll * 5 + 15;
        return getDamage(base, unit_strength_attacker, current_modifier, phase_modifier, infantry_combat_defender, discipline_defender, discipline_attacker, tactics_attacker, defender_modifier);
    } else {
        let total_roll = roll + infantry_shock_attack_pip_defender - infantry_shock_defence_pip_attacker - Math.floor(artillery_shock_defence_pip_attacker / 2);
        let current_modifier = infantry_shock_modifier_defender;
        let phase_modifier = shock_dealt_defender;
        let defender_modifier = shock_received_attacker;
        let base = total_roll * 5 + 15;
        return getDamage(base, unit_strength_attacker, current_modifier, phase_modifier, infantry_combat_defender, discipline_defender, discipline_attacker, tactics_attacker, defender_modifier);
    }
}

function getArtilleryDamageAttacker(roll) {
    if (current_phase === "fire" && tech_attacker >= 7) {
        let total_roll = roll + artillery_fire_attack_pip_attacker - infantry_fire_defence_pip_defender;
        let current_modifier = artillery_fire_modifier_attacker;
        let phase_modifier = fire_dealt_attacker;
        let defender_modifier = fire_received_defender;
        let base = total_roll * 5 + 15;
        return getDamage(base, unit_strength_attacker, current_modifier, phase_modifier, artillery_combat_attacker, discipline_attacker, discipline_defender, tactics_defender, defender_modifier) / 2;
    } else {
        return 0;
    }
}

function getArtilleryDamageDefender(roll) {
    if (current_phase === "fire" && tech_defender >= 7) {
        let total_roll = roll + artillery_fire_attack_pip_defender - infantry_fire_defence_pip_attacker;
        let current_modifier = artillery_fire_modifier_defender;
        let phase_modifier = fire_dealt_defender;
        let defender_modifier = fire_received_defender;
        let base = total_roll * 5 + 15;
        return getDamage(base, unit_strength_attacker, current_modifier, phase_modifier, artillery_combat_defender, discipline_attacker, discipline_defender, tactics_defender, defender_modifier) / 2;
    } else {
        return 0;
    }
}

function getDamage(base, unitStrength, unitModifier, phaseModifier, combatAbility, discipline, e_discipline, e_tactic, e_damage_reduction) {
    let damage = base * (unitStrength / 1000) * unitModifier * phaseModifier * combatAbility * discipline / (e_tactic * e_discipline) * (1 - e_damage_reduction) * battle_length;
    return damage;
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
