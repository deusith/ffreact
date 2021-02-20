export const ChampionData = [
    {
        name: "Warrior",
        shortName: "WAR",
        hp: "100",
        mp: "0",
        commands: {
            cmd1: {
                name: "Attack",
                desc: "Basic attack",
                type: "damage",
                baseValue: 10,
                variance: 0.2,
                critChance : 0.05,
                critMultiplier : 1.5
            },
            cmd2: {
                name: "Defend",
                desc: "-50% damage for 3 turns",
                type: "status",
                baseValue: -50,
                valyeType: "percentage",
                duration: 3
            },
            cmd3: {
                name: "Magic",
                desc: "Magic Attack",
                type: "magic",
            },
            cmd4: {
                name: "Item",
                desc: "Use item from inventory",
                type: "item",
            },
        }
    }
];

export const EnemyData = [
    {
        name: "Goblin",
        hp: 50,
        mp: "0",
        commands: {
            cmd1: {
                name: "Attack",
                desc: "Basic attack",
                type: "damage",
                baseValue: 10,
                variance: 0.2,
                critChance : 0.05,
                critMultiplier : 1.5
            },
            cmd2: {
                name: "Strong Atk",
                desc: "Stronger Atk",
                type: "damage",
                baseValue: 25,
                variance: 0.35,
                critChance : 0.025,
                critMultiplier : 3
            },
            cmd3: {
                name: "Self Heal",
                desc: "Heals",
                type: "heal",
                baseValue: 25,
                variance: 0.15,
                critChance : 0.1,
                critMultiplier : 1.5
            },
            cmd4: {
            },
        }
    }
];