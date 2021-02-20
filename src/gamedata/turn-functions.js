export const dealDamage = (key, attacker, defender) => {
    const {baseValue, variance, critChance, critMultiplier} = attacker.commands[key];
    const isCrit = Math.random() < critChance ? true : false;

    let damageDealt = baseValue + (baseValue * Math.random() * variance);
    if(isCrit){
        damageDealt *= critMultiplier;
    }

    defender.hp -= Math.floor(damageDealt);
}